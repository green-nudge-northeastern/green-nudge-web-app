import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth); // Capture loading state as well
  const location = useLocation(); // Capture the location the user was trying to access

  if (loading) {
    // While Firebase is checking the user, show a loading indicator (you can customize this)
    return <div className="loading-indicator">Loading...</div>;
  }

  if (!user) {
    // Redirect to login and pass the current location in the state
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Once loading is complete and user is authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
