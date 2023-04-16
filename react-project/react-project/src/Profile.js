import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const token = cookies.get("TOKEN")

function Profile() {
  const [user, setUser] = useState('');

    useEffect(() => {
        const configuration = {
            method: 'get',
            url: "http://localhost:3000/register/_id",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios(configuration)
            .then((result) => {
                setUser(result.data.user)
                
            })
            .catch((error) => {
                error = new Error();
            })
    }, [])


    const logout = () => {
        //destroy the cookie

        cookies.remove("TOKEN", { path: '/' })
        //redirect the user to the landing page

        window.location.href = '/'
    }

    return (
        <div className='text-center'>
            <h1>User Profile</h1>

            <h3 className='text-danger'>{user}</h3>

            <Button type='submit' variant='danger' onClick={() => logout()} >Logout</Button>
        </div>
    )
}

export default Profile;