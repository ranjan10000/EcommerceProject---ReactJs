import React, { useState ,useEffect ,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {LoginContext} from '../usecontexts/login'
import './css/Login.css'; // Import the CSS file

function Login({ setAuthenticated ,setUserRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); 
  const navigate = useNavigate(); // Get the navigate function

  const [userLogin] = useContext(LoginContext); 


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

    const user = userLogin.find(
      (user) => user.userName === username && user.password === password
    );

    if (user) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setAuthenticated(true); 
      setUserRole(user.role);
      navigate('/home');
    }else {
      alert('Incorrect username or password');
    }
  };

  if (isCheckingAuth) {
    return null;
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
