import React from 'react';
import {Cover, About, Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections'

const HomePage = () => {

  return (
    <>
        <Cover />
        <About />
        <div className='bg-mpgi'>
          <Schedule />
          <Prize />
        </div>
        <Theme />
        <Faq />
        <Team />
    </>
  )
}

export default HomePage