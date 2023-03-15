import React from 'react';
import {Cover,New,About, Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections'

const HomePage = () => {

  return (
    <>
        <div className='horizontal-scroll-container'>
        <Cover />
        <New/>
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