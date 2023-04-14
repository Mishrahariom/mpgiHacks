import React from 'react';

const SpeakerSection = () => {
  return (
<section className='container-fluid min-vh-100 align-items-center justify-content-center' style={{ "paddingTop": "7rem" }}>
<h1 className='text-center'>Speaker</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div>
            <div className='card text-center bg-white' style={{ "width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white" }}>
              <img src="https://i.ibb.co/2SbrJbh/sir-ji-2.jpg" style={{ "margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%" }} />
              <div className='card-body bg-black' style={{ "borderRadius": "0 0 2rem 2rem" }}>
                <p className='speakers-name'> Vikas Kumar Pandey</p>
                <p className='speakers-post'>Assistant Commissioner of Police</p>
                <p className='speakers-company'>Kalyanpur</p>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm">
          <div className='card text-center bg-white' style={{ "width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white" }}>
            <img src="https://i.ibb.co/X2BpSb6/Omkar-N-Srivastava.jpg" style={{ "margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%" }} />
            <div className='card-body bg-black' style={{ "borderRadius": "0 0 2rem 2rem" }}>
              <p className='speakers-name'> Omkar N Srivastava</p>
              <p className='speakers-post'>R&D Engineer</p>
              <p className='speakers-company'>MAANG, IIM-I Alumni</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div className='card text-center bg-white' style={{ "width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white" }}>
            <img src="https://i.ibb.co/88PMGHv/sir-ji-1.jpg" style={{ "margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%" }} />
            <div className='card-body bg-black' style={{ "borderRadius": "0 0 2rem 2rem" }}>
              <p className='speakers-name'> Santu Purkait</p>
              <p className='speakers-post'>Netcamp Solutions Private Limited</p>
              <p className='speakers-company'>Kolkata, West Bengal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default SpeakerSection



{/* <section className='container-fluid min-vh-100' style={{ "paddingTop": "7rem" }}>
      <h1 className='text-center'>Speaker</h1>
      <div class="d-flex flex-row    ">
        <div class="p-2">
          <div style={{ "padding-right": "75px" }} >
            <div className='card text-center bg-white' style={{ "width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white" }}>
              <img src="https://i.ibb.co/2SbrJbh/sir-ji-2.jpg" style={{ "margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%" }} />
              <div className='card-body bg-black' style={{ "borderRadius": "0 0 2rem 2rem" }}>
                <p className='speakers-name'> Vikas Kumar Pandey</p>
                <p className='speakers-post'>Assistant Commissioner of Police</p>
                <p className='speakers-company'>Kalyanpur </p>
              </div>
            </div>

          </div>
        </div>

        

        
        <div class="p-2">
        <div style={{ "padding-bottom": "100px" }} className='col-md-2'>
        <div className='card text-center bg-white' style={{ "width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white" }}>
            <img src="https://i.ibb.co/X2BpSb6/Omkar-N-Srivastava.jpg" style={{ "margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%" }} />
            <div className='card-body bg-black' style={{ "borderRadius": "0 0 2rem 2rem" }}>
              <p className='speakers-name'> Omkar N Srivastava</p>
              <p className='speakers-post'>R&D Engineer</p>
              <p className='speakers-company'>MAANG, IIM-I Alumni</p>
            </div>
        </div>
          
          </div>
        </div>
        <div class="p-2">
            <div style={{ "padding-left": "75px" }} className='col-md-3'>
            <div className='card text-center bg-white' style={{ "width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white" }}>
            <img src="https://i.ibb.co/88PMGHv/sir-ji-1.jpg" style={{ "margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%" }} />
            <div className='card-body bg-black' style={{ "borderRadius": "0 0 2rem 2rem" }}>
              <p className='speakers-name'> Santu Purkait</p>
              <p className='speakers-post'>Netcamp Solutions Private Limited</p>
              <p className='speakers-company'>Kolkata, West Bengal</p>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </section> */}






























    // <div className='d-flex flex-row align-items-center'>
    // <div id="speakers" className='container-fluid' style={{"paddingTop": "7rem"}}>
    //     <h1 className='text-center'>Speakers</h1>
    //     <div className='card text-center bg-white' style={{"width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white"}}>
    //         <img src="https://i.ibb.co/X2BpSb6/Omkar-N-Srivastava.jpg" style={{"margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%"}} />
    //         <div className='card-body bg-black' style={{"borderRadius": "0 0 2rem 2rem"}}>
    //             <p className='speakers-name'> Omkar N Srivastava</p>
    //             <p className='speakers-post'>R&D Engineer</p>
    //             <p className='speakers-company'>MAANG, IIM-I Alumni</p>
    //         </div>
    //     </div>
    //     <div className='card text-center bg-white p-2' style={{"width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white"}}>
    //         <img src="https://i.ibb.co/X2BpSb6/Omkar-N-Srivastava.jpg" style={{"margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%"}} />
    //         <div className='card-body bg-black' style={{"borderRadius": "0 0 2rem 2rem"}}>
    //             <p className='speakers-name'> Omkar N Srivastava</p>
    //             <p className='speakers-post'>R&D Engineer</p>
    //             <p className='speakers-company'>MAANG, IIM-I Alumni</p>
    //         </div>
    //     </div>
    //     <div className='card text-center bg-white p-2' style={{"width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white"}}>
    //         <img src="https://i.ibb.co/X2BpSb6/Omkar-N-Srivastava.jpg" style={{"margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%"}} />
    //         <div className='card-body bg-black' style={{"borderRadius": "0 0 2rem 2rem"}}>
    //             <p className='speakers-name'> Omkar N Srivastava</p>
    //             <p className='speakers-post'>R&D Engineer</p>
    //             <p className='speakers-company'>MAANG, IIM-I </p>
    //         </div>
    //     </div>
    // </div>
    // </div>