import React from 'react';

const Space = ({ className = '' }) => {
  return (
    <div className={`w-full   ${className}`}></div> // This creates a spacer with the default or specified height, full width, and any additional classes
  );
};

export default Space;