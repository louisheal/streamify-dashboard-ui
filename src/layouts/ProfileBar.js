import React from 'react';
import LogoutButton from 'components/LogoutButton';

const ProfileBar = ({ displayName, avatarUrl, onLogout }) => {
  return (
    <div className='flex flex-row justify-between items-center pb-5'>
      <h1 className='text-white text-5xl font-bold'>Welcome, {displayName}!</h1>
      <div className='flex flex-row justify-between gap-4'>
        <img src={avatarUrl} className='w-14 h-14 rounded-lg' alt="twitch profile picture"/>
        <LogoutButton onClick={onLogout} />
      </div>
    </div>
  );
};

export default ProfileBar;
