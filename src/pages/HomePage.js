import React, {useLayoutEffect} from 'react';
import {Cover,AboutHacks,About,TravelSection,Schedule, Prize, Sponsor, Faq, Theme,Team} from '../sections';
import gsap from 'gsap';
import useWindowDimensions from '../component/useWindowDimensions';


const HomePage = () => {
  const { width } = useWindowDimensions();
  let scaleX,scaleY;

  let scale;
  if(width < 486){
    scaleX = 0.99;
    scaleY = 0.99
  } else {
    scaleX = 0.99;
    scaleY = 0.99
  }
  
    
  useLayoutEffect(() => {
    gsap.set("#homepage", {scaleX: scaleX, scaleY: scaleY});
  }, [])

  return (
    <div id="homepage">
        <Cover />
        <AboutHacks />
        <TravelSection />
        <Prize />
        <Schedule />
        <Theme />
        <Faq />
        <About />
        <Team />
    </div>
  )
}

export default HomePage