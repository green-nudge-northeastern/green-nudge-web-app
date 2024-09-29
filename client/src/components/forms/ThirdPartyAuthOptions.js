import React from 'react';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon from react-icons
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Firebase Google Auth
import { auth } from '../../services/firebaseConfig'; // Import your Firebase config
import './ThirdPartyAuthOptions.css'; // Use the same form styling for consistency
import { useNavigate } from 'react-router-dom';

const ThirdPartyAuthOptions = ({ option }) => {
    const navigate = useNavigate(); // Hook for navigation
  
  // Handle Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Login Success:", user);
    // Redirect to the homepage after successful login
    navigate('/');
    } catch (error) {
      console.error("Google Login Failed:", error);
    }
  };

  // Handle LinkedIn Login (This requires custom OAuth flow, this is a placeholder)
  const handleLinkedInLogin = () => {
    console.log("LinkedIn login - Implement OAuth");
    // Placeholder for LinkedIn login logic (LinkedIn OAuth flow)
  };

  return (
    <div className="third-party-container">
      <p className="third-party-text">Or continue with:</p>

      <button className="third-party-button" onClick={handleGoogleLogin}>
        <FcGoogle className="third-party-icon" />
        {`${option} with Google`}
      </button>

      <button className="third-party-button" onClick={handleLinkedInLogin}>
        <FaLinkedin className="third-party-icon linkedin-icon" /> 
        {`${option} with LinkedIn`}
      </button>
    </div>
  );
};

export default ThirdPartyAuthOptions;
