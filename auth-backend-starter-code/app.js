const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

 //require database connection 
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');
const auth = require("./auth");
const Requestdata = require('./db/requestdataModel');
const Profile = require('./db/profileModel');

//execute database connection 

dbConnect()

//Curb Cores Error by adding a header here
//CORS policy
//Cross Origin Resource Sharing

app.use((req, res , next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE , PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});



app.get('/register', async(req,res) => {
  try{
        const users = await User.find()
        res.json(users)
  }catch(err){
    res.send('Error ' + err)
  }
})

app.get('/register/:id', async(req,res) => {
  try{
        const user = await User.findById(req.params.id)
        res.json(user)
  }catch(err){
    res.send('Error ' + err)
  }
})



// Create a register endpoint here
app.post('/register', (request, response) => {

  //hash the password

   //console.log(request.body)

   bcrypt.hash(request.body.password, 10)
   .then((hashedPassword) => {
        //console.log({ hashedPassword })
        //create a new user instance and collect the data
        const user = new User({
           name:request.body.name,
          phone:request.body.phone,
          email:request.body.email,
          password: hashedPassword
        })

        user.save()
        //return success if the set is added to the database successfully
        .then((result) => {
          response.status(201).send ({
            message: "User Created Successfully",
            result
          })
        })
        // catch the error if the  new user was not created in the database.
        .catch( error => {
          response.status(500).send ({
            message: 'Error creating user',
            error
          })
        })
   })
   //catch error if the password hash is not successful
   .catch((error) => {
    response.status(500).send({
      message:"Password was not hashed Successfull",
      error
    })
   })

});


//create a login endpoint here

app.post('/login', ( request, response ) => {

  //check if the email that user enters on login exists

  User.findOne({email: request.body.email })
  // if email exists 
  .then ((user) => {
    //compare the password entered by user and the hashed password found in db
    //console.log({user})
    bcrypt.compare(request.body.password , user.password)
    // check if password matches
    .then((passwordCheck) => {
      console.log({passwordCheck})

      if(!passwordCheck){
        return response.status(400).send({
          message: "Passwords does not match",
          error
        })
      }

      //create JWT token

      const token = jwt.sign({
        userId: user._id,
        userEmail: user.email
      },
      "RANDOM-TOKEN",
      {expiresIn : "24h"}
      );

      // return the success response

      response.status(200).send({
        message: "Login Successfull",
        email: user.email,
        token
      })
    })
    // catch error if password do not match
      .catch((error) => {
        response.status(400).send({
          message: "Passwords does not match",
          error
        })
      })

  })
  .catch((error) => {
    console.log(error)
    response.status(404).send({
      message: "Email not found",
      error
    })
  })
})

app.post('/request',( request , response ) =>{


  //create a new user instance and collect the data
  const requestdata = new Requestdata({
    date:request.body.date,
    topwear:request.body.topwear,
    bottomwear:request.body.bottomwear,
    woolencloth:request.body.woolencloth,
    other:request.body.other,
    phone:request.body.phone,
    description:request.body.description,
   
 })

 requestdata.save()
 //return success if the set is added to the database successfully
 .then((result) => {
   response.status(201).send ({
     message: "User Created Successfully",
     result
   })
 })
 // catch the error if the  new user was not created in the database.
 .catch( error => {
   response.status(500).send ({
     message: 'Error creating user',
     error
   })
 })
})

app.get('/request', async(req,res) => {
  try{
        const requestdatas = await Requestdata.find()
        res.json(requestdatas)
  }catch(err){
    res.send('Error ' + err)
  }
})


app.get('/request/:id', async(req,res) => {
  try{
        const requestdata = await Requestdata.findById(req.params.id)
        res.json(requestdata)
  }catch(err){
    res.send('Error ' + err)
  }
})



app.post('/profile', (request , response) => {

  //create a new user instance and collect the data
  const profile = new Profile({
    
    name:request.body.name,
          
    email:request.body.email,
   
 })

 profile.save()
 //return success if the set is added to the database successfully
 .then((result) => {
   response.status(201).send ({
     message: "User Created Successfully",
     result
   })
 })
 // catch the error if the  new user was not created in the database.
 .catch( error => {
   response.status(500).send ({
     message: 'Error creating user',
     error
   })
 })

})

//End Point 4  request type .
//CRUD => Create(post) , Read (Get) , Update (Put), Delete(Delete)


//password => bcrypt => hashing of password => database

//how to protect the endpoints

// free endpoint
app.get("/free-endpoint", (request , response) => {
  response.send({
    message: "You are  free to access me anytime"
  });
})

//authentication endpoint
app.get("/auth-endpoint", auth, (request , response) =>{
  response.send({
    message: "You are authorized to access me"
  });
})


//dashboard
app.get("/dashboard", auth, (request , response) =>{
  response.send({
    message: "You are authorized to access me"
  });
})




module.exports = app;
