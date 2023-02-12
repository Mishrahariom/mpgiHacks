import React from 'react';
import { Route } from 'react-router-dom';
import {Cover, About, Schedule, Prize, Sponsor, Faq, Theme} from '../sections'

const HomePage = () => {

  return (
    <>
        <div className='horizontal-scroll-container'>
        <Cover />
        <About />
        {/* <Route path="about" element={<About />} /> */}
        </div>

        <Schedule />

        <div className=''>
          <Prize />
          <Sponsor />
          <Faq />
          <Theme />
        </div>
    </>
  )
}

export default HomePage