import React from 'react';

import ErrorToast from 'components/ErrorToast/ErrorToast';
import streamifyLogo from 'assets/images/StreamifyLogo.png';
import TwitchLoginButton from 'components/TwitchLoginButton';

const ERROR_MSG = "You are not a Streamify affiliate";

const Login = ({ onLogin, toast }) => {
  return (
    <div className="bg-streamify-gradient flex flex-col items-center gap-8 py-12 overflow-auto w-full h-full">
      <img src={streamifyLogo} alt="Streamify Logo" className="max-w-xl w-1/3 w-min-320 mb-5" />
      {toast && (
        <ErrorToast msg={ERROR_MSG} />
      )}
      <TwitchLoginButton onClick={onLogin} />
    </div>
  );
};

export default Login;
