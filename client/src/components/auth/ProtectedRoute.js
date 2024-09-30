import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation(); // Capture the location the user was trying to access


  if (!user) {
    // Redirect to login and pass the current location in the state
    return <Navigate to="/login" state={{ from: location }} />;
  }


  return children; // If authenticated, allow access to the protected page
};

export default ProtectedRoute;
