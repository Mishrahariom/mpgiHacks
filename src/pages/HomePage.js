import React from 'react';
import {Cover, About, Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections'

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
          {/* <Sponsor /> */}
          <Faq />
          <Theme />
          <Team />
        </div>
    </>
  )
}

export default HomePage