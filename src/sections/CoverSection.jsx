import React from 'react'


const coverSection = () => {
  return (
    <section id="cover" className='panel min-vh-100 d-flex' style={{"padding": "6rem 0 0 0", "color": "gold",}}>
      <div className='col-12 col-lg-8 text-center'>
        <div className='row h-100 d-flex align-items-center'>
          <div className='col-lg-4'>
            <img src="./H2SLogoWhite.png" width={"200px"} />
            <p style={{ "color": "white"}}>presents</p>
            <img src='./mpgiHacksPNG.png' style={{"width": "300px"}} />
          </div>
          <div className='col-lg-8'>
            <h1 className='cover-heading'> MPGI HACKSS 2023</h1>
            <p>Organized by</p>
            <h3 style={{"fontSize": "50px"}}>𝕿𝖊𝖈𝖍-𝖊-𝖈𝖑𝖆𝖓</h3>
          </div>
        </div>
        {/* <div className='row'>
          <btn className="btn btn-warning">Apply With H2S</btn>
        </div> */}
      </div>
    </section>
  )
}

export default coverSection
// panel min-vh-100 d-flex flex-column align-items-start justify-content-center
