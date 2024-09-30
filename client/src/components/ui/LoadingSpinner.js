import React from 'react';
import './LoadingSpinner.css'; // Import the CSS for the spinner

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  );
};

export default LoadingSpinner;
