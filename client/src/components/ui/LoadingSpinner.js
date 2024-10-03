import React from 'react';
import './LoadingSpinner.css'; // Import the CSS for the spinner

const LoadingSpinner = ({ color = '#9dff8a' }) => {
  return (
    <div className="spinner-container">
        <div
          className="lds-ring"
          style={{ '--spinner-color': color }} // Set the CSS variable for color
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  );
};

export default LoadingSpinner;
