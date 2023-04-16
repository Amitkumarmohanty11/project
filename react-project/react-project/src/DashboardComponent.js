import React from 'react'

function DashboardComponent() {
  return (
    <>

    
    <div style={{ display: "flex" , gap:"20px" ,  justifyContent:"center" ,  textAlign:"center", marginTop:"10px" , height:"400px", }}>
        <div style={{height:"150px" , width: "200px", backgroundColor:"olive" , justifyContent:"space-evenly" }}>
          <p >New Request</p>

        </div>

        <div style={{height:"150px" , width: "200px", backgroundColor:"olive" , justifyContent:"space-evenly" }}>
        <p>Accept</p>
          
        </div>

        <div style={{height:"150px" , width: "200px", backgroundColor:"olive" , justifyContent:"space-evenly" }}>
        <p>Inprocess</p>
          
        </div>

        <div style={{height:"150px" , width: "200px", backgroundColor:"olive" , justifyContent:"space-evenly" }}>
        <p>Finish</p>
          
        </div>
        <br></br>

        



       
    </div>
    <div style={{display:"grid" , placeItems:"center" , marginBottom:"200px" }}>
          <h1>Laundry Price(Per Unit)</h1>
        </div>


        
    </>
  )
}

export default DashboardComponent
