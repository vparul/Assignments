import React from 'react';

const PlaceholderSpinner = () => {
  return (
    <div className="placeholder-spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default PlaceholderSpinner;
