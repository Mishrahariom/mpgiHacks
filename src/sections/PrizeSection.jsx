import React from 'react'

function PrizeSection() {
  return (
    <section id="prizes" className='container-fluid min-vh-100' style={{"paddingTop": "7rem"}}>
      <h1 className='text-center'>Prizes</h1>
      <div className='row'>
        <div className='col-sm-12 col-md-6 order-md-2 d-flex flex-column mt-5 align-items-center'>
          <h1 className='prize-worth'>Total Prizes Worth</h1>
          <h1 className='prize-worth text-warning'>Rs. 15000/-</h1>
          <h1 className='mt-5 prize-goodies'>Certificate & Goodies will provided to Everyone</h1>
        </div>
        <div className='col-sm-12 col-md-3 order-md-1 d-flex flex-column align-items-center'>
          <img className='prize-trophy' src="https://i.ibb.co/YjkQJ1g/clipart-png-trophy-3.webp" />
          <p className='prize-batch text-warning'>Junior batch</p>
          <p className='prize-text'>1st Prize</p>
          <p className='prize-amount'>Rs. 5000/-</p>
          <p className='prize-text'>2nd Prize</p>
          <p className='prize-amount'>Rs. 2500/-</p>
        </div>
        <div className='col-sm-12 col-md-3 order-md-3 d-flex flex-column align-items-center'>
          <img className='prize-trophy' src="https://i.ibb.co/YjkQJ1g/clipart-png-trophy-3.webp" />
          <p className='prize-batch text-warning'>Senior batch</p>
          <p className='prize-text'>1st Prize</p>
          <p className='prize-amount'>Rs. 5000/-</p>
          <p className='prize-text'>2nd Prize</p>
          <p className='prize-amount'>Rs. 2500/-</p>
        </div>
      </div>
    </section>
  );
}

export default PrizeSection;

<div>
<div className='row'>
  <div className="col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center">
  </div>
  <div className='col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center'>
  </div>
  <div className='col-12' style={{ "padding":"30px 40px"}}>
  <p className=''  style={{ "text-align": "center"}}><code> GOODIES </code>&<code> CERTIFICATE </code>will provided to Everyone</p>
  </div>
</div>
</div>
