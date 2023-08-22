import React from 'react';
import twitchLogo from 'assets/images/TwitchGlitchPurple.svg';

import './TwitchLoginButton.css';

const TwitchLoginButton = ({ onClick }) => {
  return (
    <button className="flex items-center bg-white text-purple-700 text-2xl font-semibold rounded-lg px-5 py-2.5 cursor-pointer transition-opacity hover:opacity-60" onClick={onClick}>
      <img src={twitchLogo} alt="Twitch Logo" className="w-8 h-8 mr-4" />
      <p className='mb-1'>Login with Twitch</p>
    </button>
  );
};

export default TwitchLoginButton;
