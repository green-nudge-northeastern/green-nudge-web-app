import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig'; // Import Firebase auth
import { signOut, onAuthStateChanged } from 'firebase/auth';
import './NavBar.css';
import green_nudge_icon from '../../assets/icon_700x700.png';
import profileIcon from '../../assets/profile_icon_200x200.png';
import { getAltImage } from '../../services/userUtils';

function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user when they log in or log out
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error('Logout failed', error));
  };

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
            {user ? (
                <div className="profile-menu-container">
                    <img src={profileIcon} alt="Profile" className="profile-icon" />
                    <div className="profile-dropdown">

                        {user && (
                            <div className="profile-header">
                                <img 
                                src={getAltImage(user.photoURL, user.displayName)}
                                alt="Profile" 
                                className="profile-dropdown-pic" 
                                />
                                <p className="profile-dropdown-name">{user.displayName || 'User'}</p>

                            </div>
                        )}

                        <Link to="/profile" className="menu-item">Profile</Link>
                        <button className="menu-item" onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
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
