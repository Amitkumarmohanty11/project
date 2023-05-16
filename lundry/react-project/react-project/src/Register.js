import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Register.css';


function Register() {
  const [error, setError] = useState( {
    visible : false , 
    message : "Enter a valid  email"
  });

  const [passworderror, setPassworderror] = useState({
    visible : false , 
    message : "Enter a valid  password "
  });
  //states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //set configurations
    console.log({ name, phone, email, password });

    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/register',
      data: {
        name,
        phone,
        email,
        password,
      },
    };

    //make the api call
    axios(configuration)
      .then((result) => {
        setRegister(true);
        console.log('result', result);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div className='full' style={{width:"1295px",height:"607px"}}>

    
    <Container >
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6}>
          <div className="border p-3 shadow">
            <h2 className="text-center mb-4"> User Registration</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
              {/* name */}
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const uppercaseInput = inputValue.toUpperCase();
                    if (inputValue !== uppercaseInput) {
                      alert('Please enter name in uppercase letters only.');
                    }
                    setName(uppercaseInput);
                  }}
                  placeholder="Enter Full Name"
                />
              </Form.Group>

              {/* phone */}
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericInput = inputValue.replace(/\D/g, ''); // remove non-numeric characters
                    if (numericInput.length < 10) {
                      //alert('Please enter a 10-digit phone number.');
                    } else if (numericInput.length > 10) {
                      alert('Please enter only 10 digits in the phone number field.');
                    }
                    setPhone(numericInput);
                  }}
                  placeholder="Enter Phone.No"
                />
              </Form.Group>

              {/*email */}
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                 type="email"
                 name="email"
                 value={email}
                 onChange={(e) => {
                   const inputValue = e.target.value;
                   //console.log(inputValue.match(/[A-Z]/g))
                   //console.log(inputValue.indexOf("@") === -1);
                   if(inputValue.match(/[A-Z]/g)   || inputValue.indexOf("@") === -1)
                   {
                    setError({visible : true, message : " Please enter a valid email . Your email  can not contain  upper case letter and most have @"});
                   }
                   
                   else{
                    
                    setError({visible : false, message : " "});
                   }
                   setEmail(inputValue);
                  
                 }}
                 placeholder="Enter Email"
                />
                { error.visible &&  <small className='text-danger'>{error.message}</small>} 
              </Form.Group>

              {/* password */}
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                   name="password"
                   value={password}
                   onChange={(e) => {
                     const inputValue = e.target.value;
                     const upperCaseRegex = /[A-Z]/;
                     const lowerCaseRegex = /[a-z]/;
                     const numberRegex = /[0-9]/;
                     const specialCharRegex = /[@$!%*?&]/;
                     const lengthRegex = /.{8,}/;
                     
                     if (!upperCaseRegex.test(inputValue)) {
                      setPassworderror({visible : true, message : " Please include at least one uppercase letter in your password."});
                       
                     } else if (!lowerCaseRegex.test(inputValue)) {
                      setPassworderror({visible : true, message : " Please include at least one lowercase letter in your password."});
                       
                     } else if (!numberRegex.test(inputValue)) {
                      setPassworderror({visible : true, message : "Please include at least one number in your password."});
                       
                     } else if (!specialCharRegex.test(inputValue)) {
                      setPassworderror({visible : true, message : "Please include at least one special character in your password."});
                       
                     } else if (!lengthRegex.test(inputValue)) {

                      setPassworderror({visible : true, message : "Please enter a password with a minimum length of 8 characters."});
                       
                     } else {
                      setPassworderror({visible : false, message : ""});

                     }
                     setPassword(inputValue);
                   }}
                   placeholder="Enter Password"
                />
                { passworderror.visible &&  <small className='text-danger'>{passworderror.message}</small>} 
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="d-block mx-auto mt-4"
                
              >
                Register
              </Button>

              {/* display a success or error message */}
              {register ? (
                <p className="text-success text-center mt-3">
                  You are registered successfully
                </p>
              ) : (
                <p className="text-danger text-center mt-3">
                  You are not registered
                </p>
              )}
            </Form>

            <div className="text-center mt-3">
              <a href="/login">Login</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Register;
