import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="flex bg-streamify-gradient items-center justify-center w-full h-full">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
