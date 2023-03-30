import React, {useLayoutEffect} from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useWindowDimensions from '../component/useWindowDimensions';


gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const { width } = useWindowDimensions();

  let fontSize;
  let radius;

  if(width < 486){
    fontSize = 'fs-6';
    radius = 3;
  } else {
    fontSize = 'fs-2';
    radius = 2;
  }

  // useLayoutEffect(() => {
  //   gsap.set(".about-text", {autoAlpha: 0, scale: 0.5})
  //   gsap.to(".about-text", {
  //     scrollTrigger: {
  //       trigger: '#aboutclub',
  //       start: '40% 50%',
  //       // markers: true,
  //     },
  //     scale: 1,
  //     autoAlpha: 1,
  //     delay: 0.3,
  //   })
  // });

  return (
    <section id="aboutclub" className="panel vh-100 overflow-hidden mt-5" style={{"paddingTop": "7rem"}}>
        <h1 className='text-center'>About Club</h1>
        <div className='row mt-5'>
          <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
            <img src="./mpecOutline.png" style={{"width": "70%"}} />
          </div>
          <div className='col-sm-12 col-md-6'>
            <p className='about-text'>The <code className='about-text text-warning'>Tech-e-clan (The Technical Club)</code> aims to enhance and improvise education, training, and research in technical education fields, and to create entrepreneurship and a conducive environment for pursuing technical education by promoting creative ideas & innovations of students & facilitate manifestation to them.</p>
            <p className='about-text'>The Tech_e_clan Club was established by the <code className='text-warning'>MPGI CSE Department</code> with the foundational support of our hon ’able support of <code className='about-text text-warning'>Dr. Saurabh Singh, HOD</code> of the Computer Science & Engineering Department.</p>
          </div>
        </div>
    </section>  )
}
// position-absolute end-0 top-50 translate-middle-y
export default AboutSection