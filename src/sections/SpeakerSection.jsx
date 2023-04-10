import React from 'react';

const SpeakerSection = () => {
  return (
    <div id="speakers" className='container-fluid' style={{"paddingTop": "7rem"}}>
        <h1 className='text-center'>Speakers</h1>
        <div className='card text-center bg-white' style={{"width": "18rem", "height": "25rem", "margin": "5rem auto", "borderRadius": "2rem", "border": "1px solid white"}}>
            <img src="https://i.ibb.co/X2BpSb6/Omkar-N-Srivastava.jpg" style={{"margin": "2rem auto 1rem", "width": "175px", "borderRadius": "50%"}} />
            <div className='card-body bg-black' style={{"borderRadius": "0 0 2rem 2rem"}}>
                <p className='speakers-name'> Omkar N Srivastava</p>
                <p className='speakers-post'>R&D Engineer</p>
                <p className='speakers-company'>MAANG, IIM-I Alumni</p>
            </div>
        </div>
    </div>
  )
}

export default SpeakerSection