import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
          <Route path="/profile" element={isAuthenticated ? <div>Profile Page</div> : <Navigate to="/" />} />
          <Route path="/settings" element={isAuthenticated ? <div>Settings Page</div> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
