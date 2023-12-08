import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactIMG from '../../assets/contact.png';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="navbar" >
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Project</Link>
        <Link className="desktopMenuListItem">Resume</Link>
        <Link className="desktopMenuListItem">Work Experience</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactIMG} alt="contactIMG" className="desktopMenuImg" /> Social Media and Contact
      </button>
    </nav>
  );
}

export default NavBar;