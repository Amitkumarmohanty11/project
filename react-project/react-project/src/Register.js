import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Register.css';


function Register() {
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
    <div className='full' style={{}}>

    
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
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Full Name"
                />
              </Form.Group>

              {/* phone */}
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </Form.Group>

              {/* password */}
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
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
