import React, {useLayoutEffect} from 'react';
import {Cover,AboutHacks,About, Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections';
import gsap from 'gsap';
// import useWindowDimensions from '../pages/useWindowDimensions';
import useWindowDimensions from '../component/useWindowDimensions';


const HomePage = () => {
  // const { width } = useWindowDimensions();

  // let scale;
  // if(width < 486){
  //   scale = 0.9;
  // } else {
  //   scale = 0.6;
  // }
  
    
  useLayoutEffect(() => {
    gsap.set("#homepage", {scale: 0.99});
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