import React, { useState } from 'react';
import { signIn } from '@aws-amplify/auth'; // Import signIn directly
import './AuthForm.css';

const LogInForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      // Use signIn method directly
      await signIn(email, password);
      onLoginSuccess();
    } catch (err) {
      console.error('Error during sign in:', err); // Log the error for debugging
      switch (err.code) {
        case 'UserNotFoundException':
          setError('User not found. Please check your email or sign up.');
          break;
        case 'NotAuthorizedException':
          setError('Incorrect username or password.');
          break;
        case 'UserNotConfirmedException':
          setError('User not confirmed. Please check your email for confirmation instructions.');
          break;
        default:
          setError(`Login failed. Please contact support with error code: ${err.code}`);
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogIn} noValidate>
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
      {error ? (
        <p className="auth-error-text">{error}</p>
      ) : (
        <p className="auth-error-text" style={{ visibility: 'hidden' }}>No error</p>
      )}
    </form>
  );
};

export default LogInForm;
