import React from 'react';
import './Footer.css';
import GreenNudgeLogo from '../../assets/img/icon_700x700.png';
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdSend } from "react-icons/md";


const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        alert("Subscribed!");
    };
    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="footer-brand">
                    <img src={GreenNudgeLogo} alt="Green Nudge Logo" />
                    <h2>INNOVATE RESPONSIBLY.</h2>
                    <p className="footer-slogan">
                        Empowering organizations to transform decarbonization intentions into real actions.
                    </p>
                    <div className="footer-location">
                        <FaLocationDot size={24} color="currentColor" className="footer-icons" />
                        <p>Vancouver, British Columbia</p>
                    </div>
                    <div className="social-links">
                        <a href="mailto:snehasoni@greennudge.ca" target="_blank" rel="noreferrer">
                            <MdEmail size={24} className="footer-icons" /> 
                        </a>
                        <a href="https://linkedin.com/company/greennudge/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={24} className="footer-icons" />
                        </a>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Subscribe</h3>
                        <p>Stay updated with our latest news.</p>
                        <form noValidate className="subscribe-form">
                            <input type="email" placeholder="Enter your email" className="email-input" />
                            {/* <button type="submit" className="subscribe-button" onClick={handleSubscribe}>Subscribe</button> */}
                            <button type="submit" className="subscribe-button" onClick={handleSubscribe}>
                                <MdSend size={20} />
                            </button>
                        </form>
                    </div>


                    <div className="footer-section">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-legal">&copy; {new Date().getFullYear()} GreenNudge. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
