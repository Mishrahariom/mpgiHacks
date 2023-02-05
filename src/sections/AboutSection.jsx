import React from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";


const AboutSection = () => {
  return (
    <div className="about position-relative bg-primray" style={{height: "80vh"}}>
        <h1 className='text-center'>About Us</h1>
        {/* <p cla>Maharana Pratap Engineering College, kanpur</p> */}
        <div>
          <TagCloud
              options={w => ({
                  radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                  maxSpeed: "fast",
                  itemClass: "text-warning fs-3"
              })}
              onClick={(tag) => alert(tag)}
              onClickOptions={{ passive: true }}
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
                  "Framer Motion",
                  "Three.js",
              ]}
          </TagCloud>
        </div>
        <p className='position-absolute end-0 top-50 translate-middle-y' style={{"width": "50rem", "fontSize": "20px"}}>MPGI Hack 2023 is an event organized by Tech-e-clan. The Official Club of MPGI Kanpur......... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  )
}

export default AboutSection