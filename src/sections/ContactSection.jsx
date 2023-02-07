import React from 'react'

const ContactSection = () => {
  return (
    <section className='contact row bg-dark m-0'>
      <div className='col-md-6 pt-5 ps-3 d-flex flex-column justify-content-around' style={{"height": "60vh", "paddingLeft": "7rem"}}>
        <h5>Tech-e-clan MPGI</h5>
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
        <p>Made with ❤ by TEC Team MPGI</p>
      </div>
      <div className='col-md-3 d-flex align-items-center justify-content-start'>
        <div className='w-75 h-50 bg-black rounded-5 d-flex align-items-center justify-content-center'>
          know the tech_e_clan team
        </div>
      </div>
      <div className='col-md-2 py-5 d-flex flex-column justify-content-around'>
        <h5 className="fw-bold mb-4">SPONSORES</h5>
        <p className='fs-5'>MPGI</p>
        <p className='fs-5'>MPEC</p>
        <p className='fs-5'>MIPS</p>
        <p className='fs-5'>MPCPS</p>
      </div>
      <div className='col-md-1 d-flex py-5 flex-column align-items-center justify-content-around'>
        <a href="#"><img src="https://img.icons8.com/material-sharp/28/ffffff/facebook-new.png"/></a>
        <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/discord-logo.png"/></a>
        <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/></a>
        <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-circled--v1.png"/></a>
        <a href="#"><img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"/></a>
      </div>
    </section>

  )
}

export default ContactSection






{
  // <footer className="text-center text-lg-start bg-black">
  //       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  //         <div>
            
  //         </div>
  //       </section>

  //       <section className="">
  //         <div className="container text-center text-md-start mt-5">
  //           <div className="row mt-3">
  //             <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  //               <h6 className="text-uppercase fw-bold mb-4"><i className="fas fa-gem me-3 text-secondary"></i> HACKATHON</h6>
  //               <p> Maharana Pratap Group Of Institution , Organised To An Event (HACKATHON) Mandhana Kanpur 208012.</p>
  //             </div>
  //             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  //              
  //             </div>
  //             <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  //               <h6 className="text-uppercase fw-bold mb-4"> PRICING</h6>
  //               <p>Prizes</p>
  //               <p>1st Pricing</p>
  //               <p>2nd Pricing</p>
  //               <p>3rd Pricing</p>
  //             </div>
  //             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  //               <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
  //               <p><i className="fas fa-home me-3 text-secondary"></i>Maharana Pratap Group of Institutions</p>
  //               <p><i className="fas fa-envelope me-3 text-secondary"></i>tech_e_clan@mpgi.edu.in</p>
  //               <p><i className="fas fa-phone me-3 text-secondary"></i>Kanpur</p>
  //               <p><i className="fas fa-print me-3 text-secondary"></i> 18002705600 </p>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.025)"}}>
  //         © 2023 Copyright:
  //       </div>
  //     </footer>
}