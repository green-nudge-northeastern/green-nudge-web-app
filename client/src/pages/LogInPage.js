import React, { useState } from 'react';
import './AuthPage.css'; // Import the shared CSS file

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    // Prevent form submission logic for now
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Log In</h1>
      <p className="auth-link-text">Don't have an account? <a href="/signup">Create New Account</a></p>
      <form className="auth-form" onSubmit={handleLogIn}>
        <label className="auth-label" htmlFor="email">Email</label>
        <input
          id="email"
          className="auth-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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

        <button className="auth-button" type="submit">Log In</button>
        {error && <p className="auth-error-text">{error}</p>}
      </form>
    </div>
  );
};

export default LogInPage;
