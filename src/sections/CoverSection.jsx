import React from 'react'


const coverSection = () => {
  return (
    <section id="cover" className='panel text-center min-vh-100 container-fluid' style={{"padding": "6rem 0 0 0", "color": "gold", "background": "linear-gradient(rgb(69, 52, 2), rgb(0, 0, 0))"}}>
        <div className='row gx-0 h-100'>
          <div className='col-12 col-lg-8 d-flex flex-column justify-content-center cover-content'>
            <h3 style={{"fontSize": "60px", }}>𝕿𝖊𝖈𝖍-𝖊-𝖈𝖑𝖆𝖓</h3>
            <p className='cover-subtitle mb-0 text-white'>presents</p>
            <h1 className='cover-heading'> MPGI HACKSS 2023</h1>
            <h2 style={{"marginBottom": "1rem"}}> DREAM CREATE INSPIRE</h2>
            <p className='cover-tagline'>24 Hours of Code, Coffee and Collaboration: Join Our Hackathon and Create Magic!</p>
            <p className='cover-subtitle text-white'>powered by</p>
            <img src="./H2SLogoWhite.png" style={{"width": "200px", "display": "block", "margin": "0 auto"}} />
          </div>
          <div className='col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center cover-image'>
            <img src='./mpgiHacksPNG.png' style={{"width": "100%"}} />
            <button className='btn btn-warning mt-5' style={{"width": "200px"}}>Apply</button>
          </div>
        </div>
      {/* <div className='col-12 col-lg-8 text-center'>
        <div className='row h-100 d-flex align-items-center'>
          <div className='col-lg-4'>
            <img src="./H2SLogoWhite.png" width={"200px"} />
            <img src='./mpgiHacksPNG.png' style={{"width": "300px"}} />
          </div>
          <div className='col-lg-8'>
            <p>Organized by</p>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default coverSection
// panel min-vh-100 d-flex flex-column align-items-start justify-content-center
