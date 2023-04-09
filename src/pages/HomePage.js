import React, {useLayoutEffect} from 'react';
import { Cover, AboutHacks, About, Travel, Schedule, Prize, Faq, Theme, Team, Speaker } from '../sections';
import gsap from 'gsap';
import useWindowDimensions from '../component/useWindowDimensions';


const HomePage = () => {
  const { width } = useWindowDimensions();
  let scaleX,scaleY;

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
        <Travel />
        <Prize />
        <Schedule />
        <Theme />
        <Speaker />
        <Faq />
        <About />
        <Team />
    </div>
  )
}

export default HomePage