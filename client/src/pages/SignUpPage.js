import React, { useState } from 'react';
import './AuthPage.css'; // Import the shared CSS file

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent form submission logic for now
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Create New Account</h1>
      <p className="auth-link-text">Already Registered? <a href="/login">Log In</a></p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-label" htmlFor="username">Full Name</label>
        <input
          id="username"
          className="auth-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
