import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/session')
      .then(response => {
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
    axios.post('/logout')
      .then(() => {
        setUserData(null);
      });
  };

  if (loading) {
    return (
      <div className="App">
        <p>Loading...</p>
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
        <div>
          <button onClick={handleLogin}>Login with Twitch</button>
        </div>
      )}
    </div>
  );
}

export default App;
