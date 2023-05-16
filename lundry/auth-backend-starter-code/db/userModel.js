const mongoose = require('mongoose');

//user schema

const UserSchema = new mongoose.Schema({
    //name field
    name:{
        type:String,
        required: [true, "Please provide a name"],
        
        unique: false,
    },
    //phoneno field
    phone:{
        type:Number,
        required: [true, "Please provide a phone no"],
        unique: [true, 'Number Exist']

    },
    //email field 
    email:{
        type:String,
        required: [true, "Please provide an email"],
        unique: [true, 'Email Exist']
    },

    //password fiald 
    password: {
        type:String,
        required: [true, 'Please provide a password'],
        unique: false,
    },



    
})

//export UserSchema
//create a usertable if there is no table with that name already
module.exports = mongoose.model.Users || mongoose.model("Users",UserSchema)