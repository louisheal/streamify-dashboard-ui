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
    const delay = new Promise((resolve) => setTimeout(resolve, 1000));
    const fetchSession = axios.get('/session', { withCredentials: true });

    Promise.all([delay, fetchSession])
      .then(([_, response]) => {
        if (response.data.username) {
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
    );
  };

  const LogoutButton = () => {
    return (
      <div className="right">
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  const Panel = (props) => {
    return (
      <div className={props.className}>
        <div>
          <h2>
            {props.label}
          </h2>
        </div>
        <div>
          <h3>
            {props.value}
          </h3>
        </div>
      </div>
    );
  };

  const Dashboard = (props) => {
    const data = props.data;
    return (
      <div className="dashboard">
        <div className="panel-parent">
          <h1>Welcome, {data.username}!</h1>
          <LogoutButton />
        </div>
        <div className="panel-parent">
          <Panel className="panel light" label="DISCOUNT CODE" value={data.code} />
          <Panel className="panel light" label="BALANCE" value={data.balance} />
        </div>
        <div className="panel-parent">
          <Panel className="panel dark" label="SALES" value={data.sales} />
          <Panel className="panel dark" label="LABEL" value="value" />
        </div>
      </div>
    );
  };

  const TwitchLogo = () => {
    return (
      <img src={twitchLogo} alt="Twitch Logo" className="twitch-logo" />
    );
  };

  const TwitchLoginButton = () => {
    return (
      <button className="btn twitch-btn" onClick={handleLogin}>
        <TwitchLogo />
        Login with Twitch
      </button>
    );
  };

  const LoginPage = () => {
    return (
      <div className="center-horizontal">
        <img src={streamifyLogo} alt="Streamify Logo" className="streamify-logo"/>
        <TwitchLoginButton />
      </div>
    );
  };

  return (
    <div className="App">
      {userData ? (
        <Dashboard data={userData} />
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default App;
