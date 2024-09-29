import React from 'react';
import { Link } from 'react-router-dom';
import LogInForm from '../components/forms/LogInForm'; // Import the LogInForm component
import ThirdPartyAuthOptions from '../components/forms/ThirdPartyAuthOptions'; // Import social login options
import './AuthPage.css';

const LogInPage = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Log In</h1>
      <p className="auth-link-text">Don't have an account? <Link to="/signup">Create New Account</Link></p>

      <div className="auth-columns-container">
        {/* Left column: Log-in form */}
        <div className="auth-column">
          <LogInForm />
        </div>

        {/* Vertical line separator */}
        <div className="vertical-separator"></div>

        {/* Right column: Social login options */}
        <div className="auth-column">
          <ThirdPartyAuthOptions option="Log in" />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
