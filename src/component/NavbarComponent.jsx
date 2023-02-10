import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
      <>
        <nav className="navbar-glass-effect navbar navbar-expand-lg bg-transparent" style={{"padding": "10px 20px 10px"}}>
          <div className="container-fluid d-flex flex-row">
            <Link to="/">
              <img className="navbar-brand" src='./mpgi_logo.png' style={{"width": "80px"}} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu-rounded.png"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
            <img className="navbar-brand" src="./Tech_e_Clan.png" style={{"width": "80px"}} />
          </div>
        </nav>
      </>
    )
}

export default NavbarComponent