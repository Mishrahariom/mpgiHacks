import React from 'react';
import {Cover, About, Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections'

const HomePage = () => {

  return (
    <>
        <Cover />
        <div className='bg-mpgi'>
          <About />
          <Schedule />
          <Prize />
        </div>

        <div className=''>
          <Faq />
          <Theme />
          <Team />
        </div>
    </>
  )
}

export default HomePage