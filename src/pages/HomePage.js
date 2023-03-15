import React, {useLayoutEffect} from 'react';
import {Cover,AboutHacks,About, Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections'
import gsap from 'gsap';

const HomePage = () => {
    
  useLayoutEffect(() => {
    gsap.set("#homepage", {scale: 0.5});
  }, [])

  return (
    <div id="homepage">
        <div className='horizontal-scroll-container'>
          <Cover />
          <AboutHacks />
          <About />
        </div>
        <div className='bg-mpgi'>
          <Schedule />
          <Prize />
        </div>
        <Theme />
        <Faq />
        <Team />
    </div>
  )
}

export default HomePage