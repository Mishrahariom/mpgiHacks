import React from 'react';
import {Cover,AboutHacks,About, Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections'

const HomePage = () => {

  return (
    <>
        <div className='horizontal-scroll-container'>
          <Cover />
          <AboutHacks />
          <About />
        </div>

        <Schedule />

        <div className=''>
          <Prize />
          <Sponsor />
          <Faq />
          <Theme />
          <Team />
        </div>
    </>
  )
}

export default HomePage