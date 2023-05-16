import React from 'react'
import NewRequest from './NewRequest'
import './DashboardComponent.css';

function DashboardComponent() {
  return (
    <>

    
    <div style={{ display: "flex" , gap:"20px" ,  justifyContent:"center" ,  textAlign:"center", marginTop:"10px" , height:"400px", }}>

        <div style={{height:"150px" , width: "200px", backgroundColor:"olive" , justifyContent:"space-evenly" }}>
          <p ><NewRequest/></p>

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
    <div style={{display:"grid" , placeItems:"center"  }}>
          <h1>Laundry Price(Per Unit)</h1>
        </div>

        <div  style={{display:"grid" ,alignItems: "center" ,placeItems:"center"  }}>


          <table>
            
              <tr className='rrr'>
                <td className='tt'>Top Wear </td>
                <td className='tt'>12</td>
              </tr>
              <tr  className='rrr'>
                <td className='tt'>Bottom Wear </td>
                <td className='tt'>22</td>
              </tr>
              <tr  className='rrr'>
                <td className='tt'>Woolen Cloth Wear </td>
                <td className='tt'>20</td>
              </tr>
              <tr  className='rrr'>
                <td className='tt'>Other </td>
                <td className='tt'>Other price depend upon cloth variety(Other than above three catagory)</td>
              </tr>
            
          </table>

        </div>


        
    </>
  )
}

export default DashboardComponent

//style={{border:"1px"}}
