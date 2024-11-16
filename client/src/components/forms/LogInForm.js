import React, { useState } from 'react';
import { signIn } from '@aws-amplify/auth'; // Correct import
import './AuthForm.css';

const LogInForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      // Use signIn method directly
      await signIn({username:email, password:password});
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
    <form onSubmit={handleLogIn}>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </label>
      <button type="submit">Log In</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default LogInForm;