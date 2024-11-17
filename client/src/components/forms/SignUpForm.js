import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig'; // Import the Firebase auth object
import AWS from 'aws-sdk'; // Import AWS SDK
import './AuthForm.css';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

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
      console.log('user uid:', user.uid);
      console.log('user detail', user);

      var currentUserUid = user.uid;

      // Update the user's profile with the full name
      await updateProfile(user, {
        displayName: fullName,
      });

      // Store user data in DynamoDB
      const params = {
        TableName: 'Users', // Replace with your DynamoDB table name
        Item: {
          uid: currentUserUid,
          fullName: fullName,
          email: email,
        },
      };

      await dynamoDB.put(params).promise();
      //check if the user is in the database
      
      const userData = await dynamoDB.get({
        TableName: 'Users',
        Key: {
          uid: currentUserUid,
        },
      }).promise();
      console.log('userData:', userData);
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
    <form onSubmit={handleSubmit}>
      <label>
        Full Name
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />
      </label>
      <label>
        Business Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Business Email"
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
      <button type="submit">Sign Up</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>No error</p>
      )}
    </form>
  );
};

export default SignUpForm;
