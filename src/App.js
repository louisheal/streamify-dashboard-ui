import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from 'views/Loading/Loading';
import LoginPage from 'views/Login.js';
import Dashboard from 'views/Dashboard';

import './App.css';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

function App() {
  const [loading, setLoading] = useState(true);
  const [failedLogin, setFailedLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('/userdata', { withCredentials: true })
      .then(response => {
        if (response.data.status === 'logged_in') {
          setUserData(response.data);
        } else if (response.data.status === 'login_failed') {
          setFailedLogin(true);
          handleLogout();
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

  return (
    <div className='App bg-black'>
      {loading ? (
        <Loading />
      ) : (
        <>
          {userData ? (
            <Dashboard onLogout={handleLogout} userData={userData} />
          ) : (
            <LoginPage onLogin={handleLogin} error={failedLogin} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
