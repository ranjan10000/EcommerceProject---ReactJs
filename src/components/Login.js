import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import './css/Login.css'; // Import the CSS file

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); 
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // Check if credentials exist in local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // If credentials exist, consider the user authenticated and navigate to the home page
    if (storedUsername && storedPassword) {
      setAuthenticated(true);
      navigate('/home');
    }else{
      setIsCheckingAuth(false);
    }
  }, [navigate, setAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (username === 'user' && password === 'pass') {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setAuthenticated(true); // Update the authenticated state
      navigate('/home'); // Programmatically navigate to the home page
    } else {
      alert('Incorrect username or password');
    }
  };

  // Don't render the login form until auth checking is complete
  if (isCheckingAuth) {
    return null; // or a loading spinner/placeholder
  }

  return (
    <div className="login-container">
    
      <form onSubmit={handleLogin}>
      {/* <h2>Login</h2> */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
