import React from 'react'

// const NewSection = () => {
//     return (
        
//         <section id='new-section' className='bg-dark vh-100'>
//             <h3 style={{"text-align": "center",}}>About MPGI Hacks 2023</h3>
//             <p style={{"padding":"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
//         </section>
        
//     )
// }

// export default NewSection
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NewSection() {
  return (
    <Container className='bg-black min-vh-100'>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} style={{"text-align": "center", "fontSize":"50px", "color": "gold" }}>
        <h1>About MPGI Hacks 2023</h1>
        </Col>
        <Col xs={12} style={{ "padding":"30px" ,"fontSize":"23px" }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .</p>

        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      {/* <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row> */}

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
      <Col xs={12}  md={6} style={{"text-align": "center"  }}>
      <img style={{ "width":"100px" , }} src="https://i.ibb.co/gRZzC0c/3985092-removebg-preview.png" />
        <h1  style={{  "color": "gold" ,"fontSize":"50px","text-align": "center"  }}>senior section</h1>
        <p style={{ "fontSize":"20px" ,"text-align": "center"  }}>
          <p>B.Tech: 3rd & 4th year</p>
          <p>MBA-MCA:All year</p>
          <p>Participant Per Team</p>
          <p>3-4</p>
           

        </p>
        </Col>
        <Col xs={12} md={6} style={{ "text-align": "center" }}>
        <img style={{ "width":"100px" , }} src="https://i.ibb.co/b6kvVbK/10007963.png" />
        <h1 style={{  "color": "gold" ,"fontSize":"50px",  }}>junior section</h1>
        <p style={{ "fontSize":"20px" ,  }}>
          <p>B.Tech: 1st & 2nd year</p>
          <p>BCA-BBA:All year</p>
          <p>Participant Per Team</p>
          <p>3-4</p>
        </p>
        </Col>
        {/* <Col xs={12}  md={6}>
        <h1 style={{  "color": "gold" ,"fontSize":"50px","text-align": "center"  }}>senior section</h1>
        <p style={{ "fontSize":"20px" ,"text-align": "center"  }}>Time Schedule for seniors</p>
        </Col> */}
        
      </Row>
    </Container>
  );
}

export default NewSection;