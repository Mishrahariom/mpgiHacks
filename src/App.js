import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cover, About, Schedule, Prize, Sponsor, Faq, Contact} from './sections'
import NavbarComponent from './component/NavbarComponent';

function App() {
  return (
    <>
    <NavbarComponent/>
        <Cover />
        <About />
        <Schedule />
        <Prize />
        <Sponsor />
        <Faq />
        <Contact />
    </>
  )
}

export default App