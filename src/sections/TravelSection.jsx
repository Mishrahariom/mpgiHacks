import React from 'react';

const Travel = () => {

  return (
    // <div>
    // <h1>Free Travel Expence  </h1>
    // <div style={{ "text-align": "center"}}>
    // <p style={{ "fontSize":"50px" }}>Terms & Condition</p>
    // <div style={{ "fontSize":"25px" }}>
    // <li>The Travel Expence of the participants whose colleges are outside Kanpur reimburesd at the end of the Hackathon.</li>
    // <li>Please note that the total cost of sleepr seat for train from your college to kanpur and back will be provided.</li>
    // <li>The procedure for providing travel Expence reimbursement will be communicated via email or Discord.</li>
    // </div>
    // </div>
    // </div>
    <div className='col-12 col-md-12 d-flex flex-column align-items-center jusitfy-content-center'>
          
    <h1 >Free Travel Expence</h1>
    <p style={{ "fontSize":"50px" , "color": "gold", "text-align": "center" }}> Terms & Condition</p>
    <div  style={{ "fontSize":"25px"   }} >
    <ul><li>The Travel Expence of the participants whose colleges are <code className='text-warning'> Kanpur </code> reimbur outsideesd at the <code className='text-warning'> End of the Hackathon.</code></li>
    <li>Please note that the total cost of <code className='text-warning'> Sleeper Seats </code> for <code className='text-warning'> Train </code> from your college to kanpur and back will be provided.</li>
   <li>The procedure for providing travel Expence reimbursement will be communicated via  <code className='text-warning'> Email </code> or<code className='text-warning'> Discord. </code></li>
   </ul>
   </div>



 
    
  </div>
  )
}

export default Travel