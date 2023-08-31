import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from 'views/Loading/Loading';
import LoginPage from 'views/Login.js';
import Dashboard from 'views/Dashboard';

import './App.css';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

function App() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  useEffect(() => {
    axios.get('/userdata', { withCredentials: true })
      .then(response => {
        if (response.data.status === 'logged_in') {
          setUserData(response.data);
        } else if (response.data.status === 'login_failed') {
          setToastMsg(response.data.msg);
          handleLogout();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    console.log("Login clicked");
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
            <Dashboard onLogout={handleLogout} data={userData} />
          ) : (
            <LoginPage onLogin={handleLogin} toast={toastMsg}/>
          )}
        </>
      )}
    </div>
  );
};

export default App;
