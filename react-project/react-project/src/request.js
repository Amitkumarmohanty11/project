// import React from 'react'

// function request() {
//   //states

//   const [date, setDate ] = useState("")
//   const [phone, setPhone ] = useState('')
//   const [topwear, setTopwear] = useState("")
//   const [bottomwear, setBottomwear] = useState('')
//   const [other, setOther] = useState('')
//   const [description, setDescription] = useState('')
//   const [request, setRequest] = useState(false)

//   //const [register, setRegister] = useState(false)

//   const handleSubmit =(e) => {
//       e.preventDefault()

//       //set configurations
//       console.log({date,phone,topwear,bottomwear,other,description})

//       const configuration = {
//         method: "post",
//         url: "http://localhost:3000/request",
//         data: {
//           date,
//           phone,
//           topwear,
//           bottomwear,
//           other,
//           description
//         }
//       }

//       //make the api call
//       axios(configuration)
//       .then((result) => {
//         setRequest(true)
//         console.log('result', result)
//       }).catch((error) => {
//         error = new Error()
//       })

//   }

//   return (
//     <div>
      
//       <h1>AuthComponent</h1>

//       <form onSubmit={(e) => handleSubmit(e)}>

//         <div>
//             {/* date */}
//         <input type="date"  name="date" value={date} onChange={(e) => setDate(e.target.value)}
//            placeholder='Enter date' />
//         </div>

//         <div>
//             {/* phone */}
//         <input type="phone"  name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
//            placeholder='Enter Full Name' />

//         </div>

//         <div>
//         {/* topwear */}
//         <input type="topwear"  name="topwear" value={topwear} onChange={(e) => setTopwear(e.target.value)}
//            placeholder='Enter Full Name' />

//         </div>

//         <div>
//           {/* bottomwear */}
//           <input type="bottomwear"  name="bottomwear" value={bottomwear} onChange={(e) => setBottomwear(e.target.value)}
//            placeholder='Enter Full Name' />

//         </div>

//         <div>
//         {/* other */}
//         <input type="other"  name="other" value={other} onChange={(e) => setOther(e.target.value)}
//            placeholder='Enter Full Name' />

//         </div>

//         <div>
//         {/* description */}
//         <input type="description"  name="description" value={description} onChange={(e) => setDescription(e.target.value)}
//            placeholder='Enter Full Name' />
//         </div>

//         <Button type='submit' >submit</Button>

//         {request ? (
//           <p className='text-success'>You are submit successfully</p>
//         ) : (
//               <p className='text-danger'>You are not submit</p>
//         )}
        
//       </form>


//     </div>
//   )
// }

// export default request
