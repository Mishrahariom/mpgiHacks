import React from 'react'

const NavbarComponent = () => {
    return (
        <div className='border-bottom border-warning'>
            <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-between"  id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#" style={{"color": "gold"}}>HACKATHON</a>
      <div className=''>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{"color": "white"}}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" style={{"color": "white"}} >Schedule</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{"color": "white"}}>Prizes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{"color": "white"}}>Sponsors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{"color": "white"}}>FAQs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{"color": "white"}}>Contact</a>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavbarComponent
























 //import React, { Component } from 'react'
// import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

// export default class NavbarComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar bg="light" expand="lg">
//                         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Nav className="me-auto">
//                                 <Nav.Link href="#home">Home</Nav.Link>
//                                 <Nav.Link href="#link">Link</Nav.Link>
//                                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action/3.2">
//                                         Another action
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                                     <NavDropdown.Divider />
//                                     <NavDropdown.Item href="#action/3.4">
//                                         Separated link
//                                     </NavDropdown.Item>
//                                 </NavDropdown>
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Navbar>
//             </div>
//         )
//     }
// }

