import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
      <div className='border-warning'>
          <nav className="navbar navbar-glass-effect navbar-expand-lg bg-transparent" style={{"padding": "10px 20px 10px"}}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse ps-3 d-flex justify-content-between"  id="navbarTogglerDemo01">
                <Link to="/">
                  <img className="navbar-brand" src='./mpgiHacksPNG.png' style={{"width": "50px"}} />
                </Link>
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
                  <Link to="/team">
                    <li className="nav-item">
                      <a className="nav-link active" style={{"color": "white"}}>Team</a>
                    </li>
                  </Link>
                </ul>
                </div>
              </div>
            </div>
          </nav>
      </div>
    )
}

export default NavbarComponent