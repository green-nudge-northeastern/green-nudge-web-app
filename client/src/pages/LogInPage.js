import React from 'react';
import { Link } from 'react-router-dom';
import LogInForm from '../components/forms/LogInForm'; // Import the LogInForm component
import './AuthPage.css';

const LogInPage = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Log In</h1>
      <p className="auth-link-text">Don't have an account? <Link to="/signup">Create New Account</Link></p>
      

      <LogInForm />
    </div>
  );
};

export default LogInPage;
