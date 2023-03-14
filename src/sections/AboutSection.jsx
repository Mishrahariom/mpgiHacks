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

  useLayoutEffect(() => {
    gsap.set(".about-text", {autoAlpha: 0, scale: 0.5})
    gsap.to(".about-text", {
      scrollTrigger: {
        trigger: '#aboutclub',
        start: '40% 50%',
        // markers: true,
      },
      scale: 1,
      autoAlpha: 1,
      delay: 0.3,
    })
  });

  return (
    <section id="aboutclub" className="panel vh-100 overflow-hidden">
        <h1 className='text-center'>About Club</h1>
          <div className='d-flex flex-wrap align-items-center justify-content-evenly'>
            <TagCloud
                options={w => ({
                    radius: Math.min(450, w.innerWidth, w.innerHeight) / radius,
                    maxSpeed: "fast",
                    initSpeed: "fast",
                    itemClass: `text-warning ${fontSize}`
                })}
            >
                {[
                    "VSCode",
                    "TypeScript",
                    "React",
                    "Preact",
                    "Parcel",
                    "Jest",
                    "Next",
                    "ESLint",
                    "Motion",
                    "Three.js",
                ]}
            </TagCloud>
            <div className='px-3 px-sm-0' style={{"width": "50rem", }}>
              <p className='about-text'>The Tech-e-clan (The Technical Club) aims to enhance and improvise education, training, and research in technical education fields, and to create entrepreneurship and a conducive environment for pursuing technical education by promoting creative ideas & innovations of students & facilitate manifestation to them.</p>
              <p className='about-text'>The Tech_e_clan Club was established by the MPGI CSE Department with the foundational support of our hon ’able support of Dr. Saurabh Singh, HOD of the Computer Science & Engineering Department.</p>
            </div>
          </div>
    </section>  )
}
// position-absolute end-0 top-50 translate-middle-y
export default AboutSection