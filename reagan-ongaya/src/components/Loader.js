import React from 'react';

const Loader = ({ isVisible }) => {
  return (
    isVisible && (
      <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
        <div className="h-full w-full bg-gradient-to-r from-red-200 via-red-500 to-red-800 animate-loader"></div>
      </div>
    )
  );
};

export default Loader;

