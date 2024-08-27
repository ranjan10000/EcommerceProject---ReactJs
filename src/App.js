import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import * as ROUTE from './components/constants/constants';
import './App.css';
import Profile from './components/Profile';
import Api from './usecontexts/Api';
import Setting from './components/Setting';
import MainLayout from './components/MainLayout';  
import ProductProvider from "./usecontexts/ProductProvider";
import CartProvider from './usecontexts/CartProvider';
import CartItems from './CartItems';

// Create a component to handle conditional rendering
function AppContent({ isAuthenticated ,setAuthenticated}) {
  const location = useLocation(); // Hook to get the current route

  // Determine whether to show the Navbar
  const shouldShowNavbar = !(
    location.pathname === ROUTE.SETTINGS
  );

  


  return (
    <div>
      {isAuthenticated && shouldShowNavbar}
  
      <CartProvider>
      <Routes>
        <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route element={<MainLayout />}>
        <Route path={ROUTE.HOME} element={isAuthenticated ? <Api><Home /></Api> : <Navigate to="/" />} />
       
        <Route path={ROUTE.PROFILE} element={isAuthenticated ?     <ProductProvider><Profile /></ProductProvider> : <Navigate to="/" />} />
        <Route path={`${ROUTE.SETTINGS}/*`} element={isAuthenticated ? <ProductProvider><Setting /></ProductProvider>: <Navigate to="/" />} />
        <Route  path={'/products/cartitems'} element={isAuthenticated ? <CartItems/>: <Navigate to="/" />} />
        
        </Route>
        <Route path={ROUTE.GET_PROJECT} element={isAuthenticated ? <ProjectDetail /> : <Navigate to="/" />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      </CartProvider>
    </div>
  );
}

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}  />
    </Router>
  );
}

export default App;

