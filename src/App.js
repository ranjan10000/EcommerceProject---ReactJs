import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import * as ROUTE from './components/constants/constants';
import './App.css';
import Product from './components/Product';
import Api from './usecontexts/Api';
import Setting from './components/Setting';
import MainLayout from './components/MainLayout';  
import ProductProvider from "./usecontexts/ProductProvider";
import CartProvider from './usecontexts/CartProvider';
import CartItems from './components/CartItems';
import AdminDashboard from './components/SidebarComponents/AdminDashboard'


// Create a component to handle conditional rendering
function AppContent({ isAuthenticated ,setAuthenticated, userRole, setUserRole}) {
  const location = useLocation(); // Hook to get the current route

  // Determine whether to show the Navbar
  const shouldShowNavbar = !(
    location.pathname === ROUTE.SETTINGS
  );

  const isAdmin = userRole === 'admin'
  const isUser = userRole === 'user'

  return (
    <div>
      {isAuthenticated && shouldShowNavbar}
  
      <CartProvider>
      <Routes>
        <Route path="/" element={<Login setAuthenticated={setAuthenticated} setUserRole ={setUserRole} />} />
        <Route element={<MainLayout  userRole = {userRole}/>}>
        <Route path={ROUTE.HOME} element={isAuthenticated ? <Api><Home /></Api> : <Navigate to="/" />} />

        <Route path={ROUTE.PRODUCTS} element={<ProductProvider><Product /></ProductProvider>} />
        <Route path={`${ROUTE.SETTINGS}/*`} element={ <ProductProvider><Setting /></ProductProvider>} />
        <Route  path={'/products/cartitems'} element={<CartItems/>} />
        
        </Route>
        <Route path={ROUTE.GET_PROJECT} element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path={ROUTE.ADMIN_DASHBOARD} element={isAuthenticated && isAdmin ? <AdminDashboard/> : <Navigate to="/" />}/>

      </Routes>
      </CartProvider>
    </div>
  );
}

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} userRole={userRole} setUserRole={setUserRole} />
    </Router>
  );
}

export default App;

