import gsap from 'gsap';
import React, {useLayoutEffect} from 'react';
import { Link } from 'react-scroll'


const ContactSection = () => {
  let scaleX = 0.99,scaleY = 0.99;

  useLayoutEffect(() => {
    gsap.set("#contact", {scaleX: scaleX, scaleY: scaleY});
  }, [])

  return (
    <section id="contact" className='container-fluid'>
      <div className='row'>
        <div className='py-sm-0 col-sm-12 col-md-3 contact-team d-flex flex-column justify-content-center align-items-center'>
          <img src="./Tech_e_Clan.png" className='' />
          <a href="mailto: tech_e_clan@mpgi.edu.in" className='text-decoration-none'>
            <button className='custom-apply-button apply-button'>
              <p style={{"marginBottom": "0"}}>Connect us over Email</p>
            </button>
          </a>
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
          <Link to='cover' className='contact-links' style={{"cursor": "pointer"}}>Home</Link>
          <Link to='abouthacks' className='contact-links' style={{"cursor": "pointer"}}>About Hacks</Link>
          <Link to='schedule' className='contact-links' style={{"cursor": "pointer"}}>Schedule</Link>
          <Link to='prizes' className='contact-links' style={{"cursor": "pointer"}}>Prizes</Link>
          <Link to='themes' className='contact-links' style={{"cursor": "pointer"}}>Themes</Link>
          <Link to='faqs' className='contact-links' style={{"cursor": "pointer"}}>FAQ</Link>
        </div>
        <div className='col-sm-12 px-4 px-md-0 col-md-1 mt-5 mt-sm-0 d-flex flex-md-column align-items-center justify-content-between'>
            <a className='' href="https://www.facebook.com/people/Tech-E-Clan/100086454217540/?mibextid=ZbWKwL" ><img src="https://img.icons8.com/material-sharp/28/ffffff/facebook-new.png"/></a>
            <a className='' href="https://discord.com/invite/EADG6ANSb7" ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/discord-logo.png"/></a>
            <a className='' href="https://instagram.com/tech_e_clan?igshid=YmMyMTA2M2Y=" ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/></a>
            <a className='' href="https://www.linkedin.com/company/tech-e-clan/" ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-circled--v1.png"/></a>
            <a className='' href="https://www.youtube.com/channel/UCihkpfAYZkhtlBqejbmYafg" ><img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png"/></a>
        </div>
      </div>
      <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.025)"}}>
        <p>Made with <span style={{"color": "red"}}>&#9829;</span> by TECH Team MPGI</p>
      </div>
    </section>
  )
}

export default ContactSection