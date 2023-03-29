import React, {useLayoutEffect} from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useWindowDimensions from '../component/useWindowDimensions';


gsap.registerPlugin(ScrollTrigger);


function NewSection() {
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
    <section id="abouthacks" className='container-fluid min-vh-100' style={{"paddingTop": "7rem"}}>
      <div className=''>
        <div className='text-center'>
          <h1>About Hacks</h1>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
            <TagCloud
                options={w => ({
                    radius: Math.min(450, w.innerWidth, w.innerHeight) / radius,
                    maxSpeed: "fast",
                    initSpeed: "fast",
                    itemClass: `text-warning ${fontSize}`
                })}
            >
                {[
                    "React",
                    "Flutter",
                    "TensorFlow",
                    "Power BI",
                    "HTML",
                    "CSS",
                    "HyberLedger",
                    "Motion",
                    "GSAP",
                    "JavaScript"
                ]}
            </TagCloud>
          </div>
          <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
            <p className=''><code>MPGI HACKSS - 2023</code> is an event organized by the technical club of the CSE department of <code>MPGI Kanpur</code> (T𝖊𝖈𝖍-𝖊-𝖈𝖑𝖆𝖓). This event aims to bring like-minded coders and enthusiasts from all over the nation together and inculcate coding culture among the students at the institute through its programming Hackathon. We aspire to recognize the student's limitless potential to tackle real-world problems of public interest, in a short span of time utilizing the complete freedom for use of concepts and platforms.</p>
          </div>
        </div>
      </div>
      <div className='row my-5'>
        <div className="col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center">
          <img style={{ "width":"100px",}} src="https://i.ibb.co/gRZzC0c/3985092-removebg-preview.png" />
          <h1  style={{  "color": "gold" ,"fontSize":"50px","text-align": "center"  }}>Senior Batch</h1>
          <p>B.Tech: 3rd & 4th year</p>
          <p>MBA-MCA:All year</p>
          <p>Participant Per Team</p>
          <p>2-4</p>
        </div>
        <div className='col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center'>
          <img style={{ "width":"100px" , }} src="https://i.ibb.co/b6kvVbK/10007963.png" />
          <h1 style={{  "color": "gold" ,"fontSize":"50px"}}>Junior Batch</h1>
          <p>B.Tech: 1st & 2nd year</p>
          <p>BCA-BBA:All year</p>
          <p>Participant Per Team</p>
          <p>2-4</p>
        </div>
      </div>
    </section>
  );
}

export default NewSection;