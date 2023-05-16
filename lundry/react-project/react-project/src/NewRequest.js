import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewRequest() {
    const [requestdata, setRequestdata] = useState('');

    useEffect(() => {
        const configuration = {
            method: 'get',
            url: "http://localhost:3000/request/645641653a7d8156b2d29d3d",
           
        }

        axios(configuration)
            .then((result) => {
                setRequestdata(result.data.requestdata)
                
            })
            .catch((error) => {
                error = new Error();
            })
    }, [])
  return (
    <div  className='text-center'>
         <h1>New Request</h1>

         <h3 className='text-danger'>{requestdata}</h3>
        
      
    </div>
  )
}

export default NewRequest
