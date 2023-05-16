import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

function Profile() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = cookies.get('TOKEN');
        const response = await axios.get('http://localhost:3000/register/64562f65c246b8dcc613a68c', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  const logout = () => {
    cookies.remove('TOKEN', { path: '/' });
    window.location.href = '/';
  };

  return (
    <div className='text-center'>
      <h2 style={{color:"rgb(107, 187, 187)", fontSize:"40px"}}>User Profile</h2>
      <hr></hr>
      <h3 className='text-secondary'> Name:-{user.name}</h3>
      <h3 className='text-secondary'> Phone No:-{user.phone}</h3>
      <h3 className='text-secondary'> Email:-{user.email}</h3>
      {/* <h3 className='text-danger'> Password:{user.password}</h3> */}

      <Button type='submit' variant='danger' onClick={logout} style={{margin: "20px", width:"150px"}}>Logout</Button>
    </div>
  );
}

export default Profile;
