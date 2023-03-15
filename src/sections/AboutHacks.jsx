import React from 'react'

function NewSection() {
  return (
    <section id="abouthacks" className='container-fluid min-vh-100'>
      <div className='row'>
        <div className='col-12'>
        <h1>About Hacks</h1>
        </div>
        <div className='col-12' style={{ "padding":"30px 40px"}}>
        <p className=''><code>MPGI HACKSS - 2023</code> is an event organized by the technical club of the CSE department of <code>MPGI Kanpur</code> (T𝖊𝖈𝖍-𝖊-𝖈𝖑𝖆𝖓). This event aims to bring like-minded coders and enthusiasts from all over the nation together and inculcate coding culture among the students at the institute through its programming Hackathon. We aspire to recognize the student's limitless potential to tackle real-world problems of public interest, in a short span of time utilizing the complete freedom for use of concepts and platforms.</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center">
          <img style={{ "width":"100px",}} src="https://i.ibb.co/gRZzC0c/3985092-removebg-preview.png" />
          <h1  style={{  "color": "gold" ,"fontSize":"50px","text-align": "center"  }}>senior section</h1>
          <p>B.Tech: 3rd & 4th year</p>
          <p>MBA-MCA:All year</p>
          <p>Participant Per Team</p>
          <p>3-4</p>
        </div>
        <div className='col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center'>
          <img style={{ "width":"100px" , }} src="https://i.ibb.co/b6kvVbK/10007963.png" />
          <h1 style={{  "color": "gold" ,"fontSize":"50px",  }}>junior section</h1>
          <p>B.Tech: 1st & 2nd year</p>
          <p>BCA-BBA:All year</p>
          <p>Participant Per Team</p>
          <p>3-4</p>
        </div>
      </div>
    </section>
  );
}

export default NewSection;