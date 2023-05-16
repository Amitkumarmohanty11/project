import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();


function Login() {
    //states


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)
  
    const handleSubmit =(e) => {
        e.preventDefault()
  
        //set configurations
        console.log({email, password})
  
        const configuration = {
          method: "post",
          url: "http://localhost:3000/login",
          data: {
            email,
            password
          }
        }
  
        //make the api call
        axios(configuration)
        .then((result) => {
          
          console.log('result', result)
          // set the cookie
          cookies.set("TOKEN", result.data.token, {path:'/'})
          window.location.href = '/request'
        }).catch((error) => {
          error = new Error()
        })
  
    }
  
    return (
      <div style={{display: 'grid', placeItems:'center' ,width:"1295px",height:"607px" ,margin:"auto", overflow:"hidden",
       backgroundColor: "gray"}}>
        <h2 style={{marginTop:"150px",color:"blue"}}>Login Page</h2>
        <Form onSubmit={(e) => handleSubmit(e)} style={{border: "1px solid black", boxShadow:"2px 2px 2px 2px black", backgroundColor: "gray",
                  width:"400px",height:"250px",marginBottom:"200px" }}>
  
          {/*email */}
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' name='email' value={email}
            onChange={(e) => setEmail(e.target.value)}
             placeholder='Enter Email' />
          </Form.Group>
  
          {/* password */}
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password' />
          </Form.Group>
  
          <Button variant='primary' type='submit' style={{display: 'grid', placeItems:'center', margin:"auto", marginTop:"10px"}}>Login</Button>
  
          {/* display a success or error message */}
  
          {login ? (
            <p className='text-success'>You are logged successfully</p>
          ) : (
                <p className='text-danger'>You are not logged in</p>
          )}
  
        </Form>
      </div>
    )
}

export default Login
