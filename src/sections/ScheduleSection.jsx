import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useLayoutEffect} from 'react';
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
    <Container id="schedule" className="container-fluid min-vh-100" style={{ "text-align": "center", "paddingTop": "7rem"}}>
      <Row>
        <Col xs={12}>
          <h1>Schedule</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
        <h1 className='text-warning' style={{  "padding":"30px 40px" , "fontSize":"34px"}}> Day 1  ( 18 april , 2023 )</h1>
        <div>
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
          <h1 className='text-warning' style={{  "padding":"30px 40px"}}> Day 2  ( 19 april , 2023 ) </h1>
          <div className=''>
            <p>	Hackathon Ends – 12:00 PM</p>
            <p>	Project Submission Deadline/ Judging Commences – 12:00 PM</p>
            <p>Prize Distribution Closing Ceremony – 3:00 PM</p>
          </div>
        </Col>
      </Row>
    </Container>
     )
}
export default AboutSection