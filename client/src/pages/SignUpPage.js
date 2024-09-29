import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebaseConfig'; // Import the Firebase auth object
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, {
            displayName: fullName,
        });

        // Redirect to the homepage
        navigate('/');
    } catch (err) {
         setError(`Failed to create an account: ${err.message}`);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Create New Account</h1>
      <p className="auth-link-text">Already Registered? <a href="/login">Log In</a></p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-label" htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          className="auth-input"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />

        <label className="auth-label" htmlFor="email">Business Email</label>
        <input
          id="email"
          className="auth-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Business Email"
          required
        />

        <label className="auth-label" htmlFor="password">Password</label>
        <input
          id="password"
          className="auth-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <button className="auth-button" type="submit">Sign Up</button>
        {error && <p className="auth-error-text">{error}</p>}
      </form>
    </div>
  );
};

export default SignUpPage;
