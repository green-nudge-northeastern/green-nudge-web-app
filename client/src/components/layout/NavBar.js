import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import green_nudge_icon from '../../assets/icon_700x700.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <Link to="/">
          <img src={green_nudge_icon} alt="Green Nudge Icon" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-buttons">
          <Link to="/login">
            <button className="login-button">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
