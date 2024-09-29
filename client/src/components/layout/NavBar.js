import React from 'react';
import './NavBar.css';
import green_nudge_icon from '../../assets/icon_700x700.png';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-icon">
                <a href="#home">
                    <img src={green_nudge_icon} alt="Green Nudge Icon" />
                </a>
            </div>
            <div className="navbar-links-container">
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="navbar-buttons">
                    <button className="signin-button">Log In</button>
                    <button className="signup-button">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
