import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/forms/SignUpForm'; // Import the SignUpForm component
import './AuthPage.css'; // Use the same CSS for consistency

const SignUpPage = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Create New Account</h1>
      <p className="auth-link-text">Already Registered? <Link to="/login">Log In</Link></p>
      
      {/* Use the separated SignUpForm component */}
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
