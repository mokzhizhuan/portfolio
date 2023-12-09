import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="navbar" >
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to='Projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Project</Link>
        <Link activeClass="active" to='Education' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Education</Link>
        <Link activeClass="active" to='Work' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Work Experience</Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contacts</Link>
      </div>
    </nav>
  );
}

export default NavBar;