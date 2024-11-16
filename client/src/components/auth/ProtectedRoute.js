import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCurrentUser } from '@aws-amplify/auth';
import LoadingSpinner from '../ui/LoadingSpinner'; // Import the spinner component

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Capture the location the user was trying to access

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    // Display the loading spinner while checking the user
    return <LoadingSpinner />;
  }

  if (!user) {
    // Redirect to login and pass the current location in the state
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Once loading is complete and user is authenticated, render the protected content
  return children;
};

export default ProtectedRoute;