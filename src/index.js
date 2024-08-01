import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Find the root element in your HTML where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a root using the new ReactDOM.createRoot API (for React 18 and above)
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
