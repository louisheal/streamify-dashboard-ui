import React from 'react';

function TwitchLoginButton({ onLogin, text }) {
    return (
        <button onClick={onLogin}>{text}</button>
    );
}

export default TwitchLoginButton;
