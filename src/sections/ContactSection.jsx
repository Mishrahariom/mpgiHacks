import React from 'react'

const ContactSection = () => {
  return (
    <div className='contact ps-5 bg-dark d-flex flex-column justify-content-around' style={{"height": "60vh"}}>
      <h5>Tech-e-clan MPGI</h5>
      <div className="card mb-3 bg-black" style={{"width": "40rem", "height": "12rem"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">MPGI Kanpur</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
      <p>Made with ❤ by TEC Team MPGI</p>
    </div>
  )
}

export default ContactSection
