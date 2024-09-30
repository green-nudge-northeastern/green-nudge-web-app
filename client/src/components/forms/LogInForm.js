import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import './AuthForm.css';

const LogInForm = ({ onLoginSuccess }) => { // Accept the onLoginSuccess prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      // Call onLoginSuccess after a successful login
      onLoginSuccess();
    } catch (err) {
      // set specific login error messages
      // for reference, check out error codes here: 
      // https://firebase.google.com/docs/auth/admin/errors
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/user-disabled':
          setError('This user account has been disabled. Please contact support.');
          break;
        case 'auth/user-not-found':
          setError('User not found. Please check your email or sign up.');
          break;
        case 'auth/invalid-credential':
          setError('Invalid credentials. Please check your email or password.');
          break;
        default:
          setError(`Login failed. Please contact support with error code: ${err.code}`);
      }
    }
  };

  return (
    // disabled HTML5 validation
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
