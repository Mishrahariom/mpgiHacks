import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <section id="contact" className='container-fluid pt-sm-5 bg-dark'>
      <div className='row'>
        <div className='py-sm-0 col-sm-12 col-md-3 contact-team d-flex flex-column justify-content-center align-items-center'>
          <img src="./Tech_e_Clan.png" className='' />
          {/* <Link to="/team" className='btn btn-warning'><span>Want to know the Team ?</span></Link> */}
        </div>
        <div className='col-sm-12 d-flex justify-content-center text-center col-md-6 ps-4'>
          <div className="mpgi-card card my-5 bg-black">
            <div className="row g-0">
              <div className="col-md-4 pt-5 mpgi-logo bg-white pb-5">
                <img src="./mpgi_logo.svg" className="img-fluid " alt="..."  />
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">MPGI Kanpur</h5>
                  <p className="card-text word-break">Since its inception in the year 1995 with just one school, Maharana Pratap Group of Institutions (MPGI), has diversified and widened its horizons to 5 schools, 10 colleges, one university, a medical college and a hospital located across Bhopal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mobile-hidden col-md-2 flex-wrap d-md-flex flex-row flex-md-column justify-content-between align-items-end'>
          <Link className='contact-links'>Home</Link>
          <Link className='contact-links'>About Us</Link>
          <Link className='contact-links'>Schedule</Link>
          <Link className='contact-links'>Prizes</Link>
          <Link className='contact-links'>Sponsors</Link>
          <Link className='contact-links'>FAQ</Link>
          <Link className='contact-links'>Contact</Link>
        </div>
        <div className='col-sm-12 px-4 px-md-0 col-md-1 mt-5 mt-sm-0 d-flex flex-md-column align-items-center justify-content-between'>
            <Link className='' ><img src="https://img.icons8.com/material-sharp/28/ffffff/facebook-new.png"/></Link>
            <Link className='' ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/discord-logo.png"/></Link>
            <Link className='' ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/></Link>
            <Link className='' ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-circled--v1.png"/></Link>
            <Link className='' ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"/></Link>
        </div>

      </div>
      <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.025)"}}>
        <p>Made with ❤ by TEC Team MPGI</p>
      </div>
    </section>
    
  )
}

export default ContactSection



{
  <section className="container-fluid bg-dark mt-5 px-2">
      <div className="">
        <div className="row">
          <div className="col-md-6 bg-danger">
            <div className="card mb-3 bg-black rounded-start-0 rounded-5" style={{"width": "40rem"}}>
              <div className="row g-0">
                <div className="col-md-4 pt-3 bg-white pb-5">
                  <img src="./mpgi_logo.svg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">MPGI Kanpur</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='col-md-6 bg-danger'>a</div> */}
          <div className='col-md-6 bg-warning'>b</div>
          <div className="mobile-hidden col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h5 className="fw-bold mb-4">SPONSORES</h5>
            <p className='fs-5'>MPGI</p>
            <p className='fs-5'>MPEC</p>
            <p className='fs-5'>MIPS</p>
            <p className='fs-5'>MPCPS</p>
          </div>
          <div className="mobile-hidden col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4"> PRICING</h6>
            <p>Prizes</p>
            <p>1st Pricing</p>
            <p>2nd Pricing</p>
            <p>3rd Pricing</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3 text-secondary"></i>Maharana Pratap Group of Institutions</p>
            <p><i className="fas fa-envelope me-3 text-secondary"></i>tech_e_clan@mpgi.edu.in</p>
            <p><i className="fas fa-phone me-3 text-secondary"></i>Kanpur</p>
            <p><i className="fas fa-print me-3 text-secondary"></i> 18002705600 </p>
          </div>
          <div className='col-md-1 d-flex py-5 flex-md-column align-items-center justify-content-around'>
            <a href="#"><img src="https://img.icons8.com/material-sharp/28/ffffff/facebook-new.png"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/discord-logo.png"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-circled--v1.png"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"/></a>
          </div>
        </div>
      </div>
      <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.025)"}}>
        <p>Made with ❤ by TEC Team MPGI</p>
      </div>
    </section>
}