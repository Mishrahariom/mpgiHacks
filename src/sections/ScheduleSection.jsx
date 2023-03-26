import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useLayoutEffect} from 'react';
// import { TagCloud } from "@frank-mayer/react-tag-cloud";
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
    <Container id="aboutclub" className="container-fluid min-vh-100" style={{ "text-align": "center"  }}>
    <Row>
      <Col xs={12}>
        <h1>Schedule</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
      <h1  style={{  "color": "gold" , "padding":"30px 40px" , "fontSize":"34px"}}> Day 1</h1>        <div style={{ "fontSize":"21px" }} >
        <p>Check-In time - 9:00 AM</p>
        <p>Inauguration Ceremony – 10:30 AM</p>
        <p>Problem Statement Allocation & Doubt Solving– 11:50 AM</p>
        <p>Hackathon Commences – 12:00 PM</p>
        <p>Review Round – 6:00 PM</p>
        </div>
       </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h1  style={{  "color": "gold" , "padding":"30px 40px" , "fontSize":"34px"}}> Day 2</h1>
        <div style={{ "fontSize":"21px" }} >
        <p>	Hackathon Ends – 12:00 PM</p>
        <p>	Project Submission Deadline/ Judging Commences – 12:00 PM</p>
        <p>Prize Distribution Closing Ceremony – 3:00 PM</p>
        </div>

       </Col>
    </Row>
  </Container>
     )
}
// position-absolute end-0 top-50 translate-middle-y
export default AboutSection



// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import gsap from 'gsap';


// gsap.registerPlugin(ScrollTrigger);

// function ScheduleSection() {

//   useLayoutEffect(() => {
//     gsap.set(".Schedule-text", {autoAlpha: 0, scale: 0.5})
//     gsap.to(".Schedule-text", {
//       scrollTrigger: {
//         trigger: '#Schedule',
//         start: '40% 50%',
//         // markers: true,
//       },
//       scale: 1,
//       autoAlpha: 1,
//       delay: 0.3,
//     })
//   });
//   return (
    // <Container id="Schedule" className="container-fluid min-vh-100" style={{ "text-align": "center"  }}>
    //   <Row>
    //     <Col xs={12}>
    //       <h1>Schedule</h1>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col xs={12}>
    //       <h2 style={{ "padding":"30px 40px" , "color": "gold"}}> Day 1</h2>
    //       <div style={{ "fontSize":"21px" }} >
    //       <p>Check-In time - 9:00 AM</p>
    //       <p>Inauguration Ceremony – 10:30 AM</p>
    //       <p>Problem Statement Allocation & Doubt Solving– 11:50 AM</p>
    //       <p>Hackathon Commences – 12:00 PM</p>
    //       <p>Review Round – 6:00 PM</p>
    //       </div>
    //      </Col>
    //   </Row>
    //   <Row>
    //     <Col xs={12}>
    //       <h2  style={{  "color": "gold" , "padding":"30px 40px" }}> Day 2</h2>
    //       <div style={{ "fontSize":"21px" }} >
    //       <p>	Hackathon Ends – 12:00 PM</p>
    //       <p>	Project Submission Deadline/ Judging Commences – 12:00 PM</p>
    //       <p>Prize Distribution Closing Ceremony – 3:00 PM</p>
    //       </div>

    //      </Col>
    //   </Row>
    // </Container>
//   );
// }

// export default ScheduleSection;


















// import React from 'react'

// function  ScheduleSection () {
//   return (
//     <section id="abouthacks" className='container-fluid min-vh-100'>
//       <div className='row'>
//         <div className='col-12'>
//         <h1>Schedule</h1>
//         </div>
//         <div className='col-12' style={{ "padding":"30px 40px"}}>
//         <p className=''><code>MPGI HACKSS - 2023</code> is an event organized by the technical club of the CSE department of <code>MPGI Kanpur</code> (T𝖊𝖈𝖍-𝖊-𝖈𝖑𝖆𝖓). This event aims to bring like-minded coders and enthusiasts from all over the nation together and inculcate coding culture among the students at the institute through its programming Hackathon. We aspire to recognize the student's limitless potential to tackle real-world problems of public interest, in a short span of time utilizing the complete freedom for use of concepts and platforms.</p>
//         </div>
//       </div>
//       <div className='row'>
//         <div className="col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center">
//           <img style={{ "width":"100px",}} src="https://i.ibb.co/gRZzC0c/3985092-removebg-preview.png" />
//           <h1  style={{  "color": "gold" ,"fontSize":"50px","text-align": "center"  }}>senior section</h1>
//           <p>B.Tech: 3rd & 4th year</p>
//           <p>MBA-MCA:All year</p>
//           <p>Participant Per Team</p>
//           <p>2-4</p>
//         </div>
//         <div className='col-12 col-md-6 d-flex flex-column align-items-center jusitfy-content-center'>
//           <img style={{ "width":"100px" , }} src="https://i.ibb.co/b6kvVbK/10007963.png" />
//           <h1 style={{  "color": "gold" ,"fontSize":"50px",  }}>junior section</h1>
//           <p>B.Tech: 1st & 2nd year</p>
//           <p>BCA-BBA:All year</p>
//           <p>Participant Per Team</p>
//           <p>2-4</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default  ScheduleSection;






















// import React, {useLayoutEffect} from 'react';
// // import SchedulePath from '../component/SchedulePath';
// // import ScheduleCardComponent from '../component/ScheduleCardComponent';
// // import useWindowDimensions from '../component/useWindowDimensions';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);


// const positionsForMobile = [
//   {
//     left: "0%",
//     // right: 0,
//     top: "0%",
//   },
//   {
//     // left: auto,
//     right: "0%",
//     top: "20%",
//   },
//   {
//     left: "0%",
//     // right: 0,
//     top: "40%",
//   },
//   {
//     // left: 0,
//     right: "0%",
//     top: "60%",
//   },
//   {
//     left: "0%",
//     // right: 0,
//     top: "80%",
//   },
// ]

// const positionsForLaptop = [
//   {
//     left: "20%",
//     // right: auto,
//     top: "0%",
//   },
//   {
//     left: "66%",
//     // right: auto,
//     top: "17%",
//   },
//   {
//     left: "21%",
//     // right: auto,
//     top: "36%",
//   },
//   {
//     left: "66%",
//     // right: auto,
//     top: "52%",
//   },
//   {
//     left: "22%",
//     // right: auto,
//     top: "69%",
//   },
// ]

// const phases = [
//   {
//     phaseName: "Phase 1",
//     phaseDetails: "Registrations or Opening Ceremony"
//   },
//   {
//     phaseName: "Phase 2",
//     phaseDetails: "Shortlisting or Hackthon Begins"
//   },
//   {
//     phaseName: "Phase 3",
//     phaseDetails: "Judgement Round 1 or Review Round"
//   },
//   {
//     phaseName: "Phase 4",
//     phaseDetails: "Hackathon End"
//   },
//   {
//     phaseName: "Phase 5",
//     phaseDetails: "Closing Ceremony"
//   }
// ];



// const ScheduleSection = () => {

//   const { width } = useWindowDimensions();
//   let positions;

//   if(width < 486){
//     positions = positionsForMobile.map(pos => {return {...pos}})
//   } else {
//     positions = positionsForLaptop.map(pos => {return {...pos}})
//   }

//   useLayoutEffect(() => {
//     // let t1 = gsap.timeline();
//     // gsap.to("#phase1", {
//     //   scrollTrigger: {
//     //     trigger: "#schedule-start",
//     //     start: `${positions[1].top}`,
//     //     markers: true,
//     //   },
//     //   scale: 0.7
//     // })
//     for(let i = 0; i< 5; i++ ){
//       gsap.set(`#${phases[i].phaseName.split(" ").join("").toLowerCase()}`, {autoAlpha: 0})
//       gsap.to(`#${phases[i].phaseName.split(" ").join("").toLowerCase()}`, {
//         scrollTrigger: {
//           trigger: "#schedule-start",
//           start: `${positions[i].top} ${positions[4 - i].top}` ,
//           // markers: true,
//         },
//         autoAlpha: 1,
//         ease: "in",
//         duration: 0.5,
//         yoyo: true,
//         // repeat: -1,
//       })
//     }
//   })


//   return (
//     <section id="schedule" className='mt-5 mt-md-0'>
//       <h1 className='text-center'>Schedule</h1>
//       <h2 className='text-center text-warning'>Not Disclosed Yet</h2>

//       {/* <div id="schedule-start" className='schedule-height position-relative'>
//         <div className='text-center'><SchedulePath /></div>
//         {
//           phases.map((phase,i) => (
//             <ScheduleCardComponent
//               phaseName={phase.phaseName}
//               phaseDetails={phase.phaseDetails}
//               posLeft={positions[i].left}
//               posRight={positions[i].right}
//               posTop={positions[i].top}
//               key={i.toString()}
//               id={i.toString()}
//             />
//           ))
//         }
//       </div> */}
//     </section>
//   )
//  }

// export default ScheduleSection
