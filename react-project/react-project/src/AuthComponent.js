import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { button } from 'react-bootstrap';
import  './AuthComponent.css';


function AuthComponent() {


  //states

  const [date, setDate ] = useState("")
  //const [phone, setPhone ] = useState('')
  const [topwear, setTopwear] = useState("")
  const [bottomwear, setBottomwear] = useState('')
  const [woolencloth, setWoolencloth] = useState('')
  const [other, setOther] = useState('')
  const [phone, setPhone ] = useState('')
  const [description, setDescription] = useState('')
  const [request, setRequest] = useState(false)

  //const [register, setRegister] = useState(false)

  const handleSubmit =(e) => {
      e.preventDefault()

      //set configurations
      console.log({date,topwear,bottomwear, woolencloth,other,phone,description})

      const configuration = {
        method: "post",
        url: "http://localhost:3000/request",
        data: {
          date,
          topwear,
          bottomwear,
          woolencloth,
          other,
          phone,
          description
        }
      }

      //make the api call
      axios(configuration)
      .then((result) => {
        setRequest(true)
        console.log('result', result)
      }).catch((error) => {
        error = new Error()
      })

  }

  return (
    <div className='body'>
      
      <h1>AuthComponent</h1>

      <form onSubmit={(e) => handleSubmit(e)} className='all'>

        <div  className="form-control">
            {/* date */}
        <input type="date"  name="date" value={date} onChange={(e) => setDate(e.target.value)}
           placeholder=' date' />
        </div>

        <div className="form-control">
            {/* phone */}
        <input type="phone"  name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
           placeholder=' phone no' />

        </div>

        <div className="form-control">
        {/* topwear */}
        <input type="topwear"  name="topwear" value={topwear} onChange={(e) => setTopwear(e.target.value)}
           placeholder=' topwear' />

        </div>

        <div className="form-control">
          {/* bottomwear */}
          <input type="bottomwear"  name="bottomwear" value={bottomwear} onChange={(e) => setBottomwear(e.target.value)}
           placeholder=' bottomwear' />

        </div>
        <div className="form-control">
        {/* woolencloth */}

        <input type="woolencloth"  name="woolencloth" value={woolencloth} onChange={(e) => setWoolencloth(e.target.value)}
           placeholder=' woolencloth' />

        </div>

        <div className="form-control">
        {/* other */}
        <input type="other"  name="other" value={other} onChange={(e) => setOther(e.target.value)}
           placeholder='other' />

        </div>

        <div className="form-control">
        {/* description */}
        <input type="description"  name="description" value={description} onChange={(e) => setDescription(e.target.value)}
           placeholder='description' />
        </div>

        <button type='submit' >submit</button>

        {request ? (
          <p className='text-success'>You are submit successfully</p>
        ) : (
              <p className='text-danger'>You are not submit</p>
        )}
        
      </form>


    </div>
  )
}

export default AuthComponent
