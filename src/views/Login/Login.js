import React from 'react';

// import './Login.css';

import ErrorToast from 'components/ErrorToast/ErrorToast';
import streamifyLogo from 'assets/images/StreamifyLogo.png';
import TwitchLoginButton from 'components/TwitchLoginButton/TwitchLoginButton';

const ERROR_MSG = "You are not a Streamify affiliate";

const Login = ({ onLogin, toast }) => {    
  return (
    <div className="gradient-bg flex flex-col items-center gap-8 py-12 w-full h-full">
      <img src={streamifyLogo} alt="Streamify Logo" className="max-w-xl mb-5" />
      {toast && (
        <ErrorToast msg={ERROR_MSG} />
      )}
      <TwitchLoginButton onClick={onLogin} />
    </div>
  );
};

export default Login;
