import React from 'react'
import img from './images/hero.jpg';
//import './Home.css';

function Home() {
  return (
    <div style={{backgroundColor:" rgb(137, 129, 142)", display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"0"}}>

      
      {/* <div className='image-wrapper'>
      <img src={img} alt='Tajmal' className='body-img'/> 
      </div> */}
      <div className='image-text'>
      
      <img src={img} alt='image' style={{width:"1295px",height:"575px"}}></img>
      <h2 style={{display:"flex",flexDirection:"column",position:"absolute",textAlign:"center",bottom:"60%",left:"30%",fontWeight:"600",color:"rgb(94, 14, 10)"}}>WELLCOME TO LAUNDRY MANAGMENT</h2>
      <h4 style={{position:"absolute",textAlign:"center",bottom:"50%",left:"42%",fontWeight:"600",color:"rgb(94, 14, 10)"}}>ENJOY YOUR HOLLYDAY</h4>
     
      </div>
      
      <div style={{background:"gray",width:"1295px",height:"55px",textAlign:"center" }}>
        <p style={{margin:"5px"}}>Copy right</p>

      </div>
      
    </div>
  )
}

export default Home
