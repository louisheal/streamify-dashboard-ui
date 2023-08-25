import React from 'react';

const LogoutButton = ({ onClick }) => {
  return (
    <button className="flex justify-center bg-white text-black text-2xl font-semibold rounded-lg px-5 py-2.5 h-auto cursor-pointer transition-opacity hover:opacity-60" onClick={onClick}>
      Logout
    </button>
  );
};

export default LogoutButton;
