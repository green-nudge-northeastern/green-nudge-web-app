import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/forms/SignUpForm'; // SignUp form component
import ThirdPartyAuthOptions from '../components/forms/ThirdPartyAuthOptions'; // Social login options component
import './AuthPage.css'; // Page-level styles

const SignUpPage = () => {

  return (
    <div className="auth-container">
      <h1 className="auth-title">Create New Account</h1>
      <p className="auth-link-text">Already Registered? <Link to="/login">Log In</Link></p>

      {/* Flex container for two columns */}
      <div className="auth-columns-container">
        {/* Left column: Sign-up form */}
        <div className="auth-column">
          <SignUpForm />
        </div>

        {/* Vertical line separator */}
        <div className="vertical-separator"></div>

        {/* Right column: Third-party auth options */}
        <div className="auth-column">
          <ThirdPartyAuthOptions 
            option="Sign up"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
