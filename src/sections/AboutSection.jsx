import React, {useLayoutEffect} from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useLayoutEffect(() => {
    // gsap.to("#motionSVG", {
    //   scrollTrigger: {
    //     trigger: "#path",
    //     start: "top 90%",
    //     scrub: 1,
    //     // markers: true
    //   },
    //   // duration: 1,
    //   yoyo: true,
    //   ease: "none",
    //   immediateRender: true,
    //   motionPath: {
    //     path: "#path",
    //     align: "#path",
    //     autoRotate: true,
    //     alignOrigin: [0.5, 0.5]
    //   }
    // });
    // gsap.fromTo("#aboutclub", {opacity: 0},{opacity: 1, duration: 5});
  });

  return (
    <section id="aboutclub" className="panel bg-primray" style={{minHeight: "100vh"}}>
        <h1 className='text-center'>About Club</h1>
        {/* <p cla>Maharana Pratap Engineering College, kanpur</p> */}
          <div className='d-flex flex-wrap align-items-center justify-content-evenly'>
            <TagCloud
                options={w => ({
                    radius: Math.min(450, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "fast",
                    initSpeed: "fast",
                    itemClass: "text-warning fs-2"
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