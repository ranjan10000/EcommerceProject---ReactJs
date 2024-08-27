import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store/Store'
// Find the root element in your HTML where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a root using the new ReactDOM.createRoot API (for React 18 and above)
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>
);
