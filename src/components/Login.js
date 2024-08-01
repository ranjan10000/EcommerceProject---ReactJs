import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; // Import the CSS file
import Modal from './Modal'; // Import Modal component

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (username === 'user' && password === 'pass') {
      setAuthenticated(true); // Update the authenticated state
      setModalOpen(true);
      navigate('/home'); // Programmatically navigate to the home page
    } else {
      alert('Incorrect username or password');
    }
  };

//   const closeModal = () => setModalOpen(false);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
      <Modal isOpen={isModalOpen} >
        <h2>Welcome!</h2>
        <p>You have successfully logged in.</p>
      </Modal>
    </div>
  );
}

export default Login;
