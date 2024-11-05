import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig'; // Import Firebase auth for signOut
import { getAltImage } from '../../services/userUtils';
import './ProfileDropdown.css'; // Import the new CSS file for this component
import { ReactComponent as ProfileIcon } from '../../assets/img/profile-icon-circle.svg';

const ProfileDropdown = ({ user }) => {
  const handleLogout = () => {
    signOut(auth)
      .catch((error) => console.error('Logout failed', error));
  };

  return (
    <div className="profile-menu-container">
      <ProfileIcon className="profile-icon" />
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

        <Link to="/account" className="menu-item">Account</Link>
        <Link to="/dashboard" className="menu-item">Dashboard</Link>
        <Link to="/launch" className="menu-item">Launch (beta)</Link>
        <Link to="/upload" className="menu-item">Upload Bills</Link>
        <button className="menu-item" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
