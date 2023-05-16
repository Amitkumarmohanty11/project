import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { button } from 'react-bootstrap';
import  './AuthComponent.css';


function AuthComponent() {


  //states

  const [date, setDate ] = useState("")
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")
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
      console.log({date,month,year,topwear,bottomwear, woolencloth,other,phone,description})

      const configuration = {
        method: "post",
        url: "http://localhost:3000/request",
        data: {
          date,
          month,
          year,
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

        <div className="form-control" style={{display:"flex",flexDirection:"row",gap:"25px"}}>
          {/* date */}
          <input type="number" name="date" value={date} onChange={(e) => setDate(e.target.value)} style={{width:"120px"}} placeholder="Date" />
          <input type="number" name="month" value={month} onChange={(e) => setMonth(e.target.value)} style={{width:"120px"}}placeholder="Month" />
          <input type="number" name="year" value={year} onChange={(e) => setYear(e.target.value)} style={{width:"120px"}}placeholder="Year" />
        </div>


        <div className="form-control">
            {/* phone */}
        <input type="phone"  name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
           placeholder=' Phone no' />

        </div>

        
        <div className="form-control">
            {/* bottomwear */}
            <select
              name="topwear"
              value={topwear}
              onChange={(e) => setTopwear(e.target.value)}
              className="dropdown">
              <option value="">Select topwear</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Shirt">Shirt</option>
              <option value="Sweatshirt">Sweatshirt</option>
              <option value="Denim Jacket">Denim Jacket</option>
              <option value="Flannel Shirt">Flannel Shirt</option>
              <option value="Sweatshirt">Sweatshirt</option>
              <option value="Tunic">Tunic</option>
              <option value="Peplum Top">Peplum Top</option>
              <option value="Crop Top">Crop Top</option>
              {/* Add more options as needed */}
            </select>
          </div>

        <div className="form-control">
            {/* bottomwear */}
            <select
              name="bottomwear"
              value={bottomwear}
              onChange={(e) => setBottomwear(e.target.value)}
              className="dropdown">
              <option value="">Select bottomwear</option>
              <option value="Jeans">Jeans</option>
              <option value="Trousers">Trousers</option>
              <option value="Shorts">Shorts</option>
              
              {/* Add more options as needed */}
            </select>
          </div>

        <div className="form-control">
            {/* bottomwear */}
            <select
              name="woolencloth"
              value={woolencloth}
              onChange={(e) => setWoolencloth(e.target.value)}
              className="dropdown">
              <option value="">Select woolencloth</option>
              <option value=" sweater"> sweater</option>
              <option value="Wool Flannel">Wool Flannel</option>
              <option value="Cashmere">Cashmere</option>
              <option value="Boiled Wool">Boiled Wool</option>
              {/* Add more options as needed */}
            </select>
          </div>

        <div className="form-control">
        {/* other */}
        <input type="other"  name="other" value={other} onChange={(e) => setOther(e.target.value)}
           placeholder='Other' />

        </div>

        <div className="form-control">
        {/* description */}
        <input type="description"  name="description" value={description} onChange={(e) => setDescription(e.target.value)}
           placeholder='Description' />
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
