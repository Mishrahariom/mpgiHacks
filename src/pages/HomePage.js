import React from 'react';
import {Cover, About, Schedule, Prize, Sponsor, Faq, Contact, Theme} from '../sections'

const HomePage = () => {
  return (
    <>
        <div className='horizontal-scroll-container'>
        <Cover />
        <About />
        </div>

        <Schedule />

        <div className=''>
          <Prize />
          <Sponsor />
          <Faq />
          <Theme />
        </div>

        <Contact />
    </>
  )
}

export default HomePage