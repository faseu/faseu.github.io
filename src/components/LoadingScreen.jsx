import React from 'react';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ loading }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // After the fade-out effect, hide the loading screen
    if (!loading) {
      const hideTimeout = setTimeout(() => {
        setHidden(true);
      }, 1000); // Adjust the duration to match the fade-out animation duration

      // Clear the timeout to avoid memory leaks
      return () => clearTimeout(hideTimeout);
    }
  }, [loading]);

  const loadingScreenStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: !hidden ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050816', // Set your preferred background color
    zIndex: '999', // Set a high z-index to overlay on top of other content
    opacity: !loading ? 0 : 1,
    transition: 'opacity 1s ease-out', // Adjust the duration and timing function as needed
  };

  return (
    <div style={loadingScreenStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            border: '8px solid #f0f0f0', // Set your preferred spinner color
            borderTop: '8px solid #ff7f00', // Set your preferred background color
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        <p
          style={{
            marginTop: '20px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333', // Set your preferred text color
          }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
