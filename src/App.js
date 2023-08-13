import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import streamifyLogo from './assets/StreamifyLogo.png'
import twitchLogo from './assets/TwitchGlitchPurple.svg'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = new Promise((resolve) => setTimeout(resolve, 500));
    const fetchSession = axios.get('/session', { withCredentials: true });

    Promise.all([delay, fetchSession])
      .then(response => {
        console.log(response[1])
        if (response[1].data.username) {
          setUserData(response.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    window.location.href = process.env.REACT_APP_API_URL + '/auth/twitch';
  };

  const handleLogout = () => {
    axios.get('/logout', { withCredentials : true })
      .then(() => {
        setUserData(null);
      });
  };

  if (loading) {
    return (
      <div className="App">
        <div className="center-container">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {userData ? (
        <div>
          <p>Welcome, {userData.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="center-horizontal">
          <img src={streamifyLogo} alt="Streamify Logo" className="streamify-logo"/>
          <button className="twitch-btn" onClick={handleLogin}>
            <img src={twitchLogo} alt="Twitch Logo" className="twitch-logo" />
            Login with Twitch
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
