import React from 'react'

function FreeComponent() {
  return (
    <div style={{
      "background-color": "aquamarine",
      "box-shadow": "20px 20px 20px #98FB98",
      "font-family": "georgia",
      "padding": "25px 25px",
      "margin": "11px",
      "margin-top": "50px" , "height":"500px"}}>
      <h1>About</h1>
        <p style={{"alignItems": "center"}}>
          Introduction: Provide an overview of the laundry management system and explain how it can help users manage 
          heir laundry needs more efficiently.<br></br>


          Features: Describe the key features of the laundry management system. For example, it might include features such as online booking of 
          laundry services, real-time updates on laundry status, and automatic reminders for pick-up and delivery.<br></br>

          How it works: Explain how the laundry management system works, step by step. This could include information 
          on how to place an order, how to track the status of your laundry, and how to receive your clean laundry.<br></br>

          Pricing: Provide information on the pricing structure for laundry services and any special promotions or discounts that are available.

          FAQs: Compile a list of frequently asked questions and provide answers to help users better understand the laundry management system.
        </p>
    </div>
  )
}

export default FreeComponent
