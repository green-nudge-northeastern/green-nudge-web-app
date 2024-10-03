import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth'; // Remove signOut here
import './NavBar.css';
import green_nudge_icon from '../../assets/img/icon_700x700.png';
import ProfileDropdown from './ProfileDropdown'; // Import the ProfileDropdown component

function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user when they log in or log out
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <Link to="/">
          <img src={green_nudge_icon} alt="Green Nudge Icon" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li><a href="#about">Home</a></li> 
          <li><a href="#demos">Demos</a></li>
          <li><a href="#contact">Contact</a></li> 

        </ul>
        <div className="navbar-buttons">
          {user ? (
            // Pass the user to ProfileDropdown and handle logout inside ProfileDropdown
            <ProfileDropdown user={user} />
          ) : (
            <>
              <Link to="/login">
                <button className="login-button">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="signup-button">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
