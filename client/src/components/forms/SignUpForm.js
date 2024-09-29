import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig'; // Import the Firebase auth object
import './AuthForm.css';

const SignUpForm = () => {
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

      // Update the user's profile with the full name
      await updateProfile(user, {
        displayName: fullName,
      });

      // Redirect to the homepage after successful sign-up
      navigate('/');
    } catch (err) {
      // set specific signup error messages
      // for reference, check out error codes here: 
      // https://firebase.google.com/docs/auth/admin/errors
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/email-already-in-use':
          setError('Email already in use. Please log in or reset your password.');
          break;
        case 'auth/invalid-password':
          setError('Invalid password. Password must be at least 6 characters.');
          break;
        default:
          setError(`Sign-up failed. Please contact support with error code: ${err.code}`);
      }
    }
  };

  return (
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
      {error ? (
        <p className="auth-error-text">{error}</p>
      ) : (
        <p className="auth-error-text" style={{ visibility: 'hidden' }}>No error</p>
      )}
    </form>
  );
};

export default SignUpForm;
