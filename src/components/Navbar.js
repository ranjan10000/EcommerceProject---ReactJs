import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar"> 
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
