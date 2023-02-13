import React, {useState} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const menus = ["About Us", "Schedule", "Prizes", "Sponsors", "FAQs", "Contact"];


const NavbarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  
  const handleClick = () => {
    document.getElementById("navbarToggle").classList.remove("show")
  }
    return (
      <>
        <nav className="navbar-glass-effect navbar navbar-expand-lg bg-transparent" style={{"padding": "10px 20px 10px"}}>
          <div className="container-fluid d-flex flex-row">
            <RouterLink to="/">
              <img className="navbar-brand" src='./mpgi_logo.png' style={{"width": "80px"}} />
            </RouterLink>
            <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-label="Toggle navigation">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu-rounded.png"/>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show" }`}  id="navbarToggle">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {
                  menus.map(menu => (
                    <li className='nav-item' key={menu.toLowerCase().split(" ").join("")}>
                      <Link className='nav-link active text-white' to={menu.toLowerCase().split(" ").join("")} onClick={handleClick}>{menu}</Link>
                    </li>
                  ))
                }
                <RouterLink to="/team">
                  <li className="nav-item">
                    <a className="nav-link active text-white">Team</a>
                  </li>
                </RouterLink>
              </ul>
            </div>
            <img className="navbar-brand" src="./Tech_e_Clan.png" style={{"width": "80px"}} />
          </div>
        </nav>
      </>
    )
}

export default NavbarComponent