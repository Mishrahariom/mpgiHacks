import React from 'react'

const coverSection = () => {
  return (
    <section className='panel cover vh-100 d-flex flex-column align-items-center justify-content-center' style={{"paddingTop": "5rem", "color": "gold", "background":"linear-gradient(#453402, #000000)"}}>
        <h3 style={{"fontSize": "50px",}}>𝕿𝖊𝖈𝖍-𝖊-𝖈𝖑𝖆𝖓</h3>
        <p style={{ "color": "white"}}>presents</p>
        <img src='./mpgiHacksPNG.png' style={{"width": "30%"}} />
        <h1 className='cover-heading'>MPGI HACKSS 2023</h1>
    </section>
  )
}

export default coverSection
