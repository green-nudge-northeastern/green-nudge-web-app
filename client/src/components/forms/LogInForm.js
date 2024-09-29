import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig';
import './AuthForm.css';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
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
  );
};

export default LogInForm;
