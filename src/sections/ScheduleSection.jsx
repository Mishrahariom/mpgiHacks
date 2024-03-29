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

  return (
    <Container id="schedule" className="container-fluid min-vh-100" style={{ "text-align": "center", "paddingTop": "7rem"}}>
      <Row>
        <Col xs={12}>
          <h1 style={{ "fontSize":"80px"}}>Schedule</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
        <h1 className='text-warning' style={{  "padding":"30px 40px" , "fontSize":"34px"}}> Day 1  ( 18 april , 2023 )</h1>
        <div>
          <p>Check-In Time - 9:00 AM</p>
          <p>Inauguration Ceremony - 10:00 AM</p>
          <p>Hackathon Commences - 11:00 AM</p>
          <p>Review Round - 6:00 PM</p>
          <p>Day 1 Ends - 07:00 PM </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h1 className='text-warning' style={{  "padding":"30px 40px"}}> Day 2  ( 19 april , 2023 ) </h1>
          <div className=''>
            <p>Day 2 Reporting time  - 8:00 AM</p>
            <p>Hackathon Resumes - 9:00 AM</p>
            <p>Guest talk session - 12:15 PM</p>
            <p>Project Submission Deadline / Judging Commences - 3:30 PM</p>
            <p>Closing Ceremony Starts - 05:00 PM</p>
            <p>Hackathon end - 07:00 PM </p>
          </div>
        </Col>
      </Row>
    </Container>
     )
}
export default AboutSection