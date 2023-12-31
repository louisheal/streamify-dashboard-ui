import React from 'react';
import LogoutButton from 'components/LogoutButton';

const ProfileBar = ({ displayName, avatarUrl, onLogout }) => {
  return (
    <div className='flex flex-row items-center pb-5'>
      <h1 className='text-white text-3xl lg:text-5xl font-bold lg:whitespace-nowrap w-min-content'>Welcome, {displayName}!</h1>
      <div className='flex flex-row ml-auto gap-4'>
        <img src={avatarUrl} className='w-14 h-14 rounded-lg' alt="twitch avatar"/>
        <LogoutButton onClick={onLogout} />
      </div>
    </div>
  );
};

export default ProfileBar;
