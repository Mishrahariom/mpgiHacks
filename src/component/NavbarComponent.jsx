import React from 'react'

const NavbarComponent = () => {
    return (
      <div className='border-bottom border-warning '>
          <nav className="navbar navbar-glass-effect navbar-expand-lg bg-transparent" style={{"padding": "10px 20px 0"}}>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse ps-3 d-flex justify-content-between"  id="navbarTogglerDemo01">
                {/* <a  href="#" style={{"color": "gold"}}>HACKATHON</a> */}
                <img className="navbar-brand" src='./mpgiHacksPNG.png' style={{"width": "50px"}} />
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