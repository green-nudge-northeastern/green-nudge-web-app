import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import LoadingSpinner from '../ui/LoadingSpinner'; // Import the spinner component

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth); // Capture loading state as well
  const location = useLocation(); // Capture the location the user was trying to access

  if (loading) {
    // Display the loading spinner while Firebase is checking the user
    return (
        <LoadingSpinner />
    );
  }

  if (!user) {
    // Redirect to login and pass the current location in the state
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Once loading is complete and user is authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
