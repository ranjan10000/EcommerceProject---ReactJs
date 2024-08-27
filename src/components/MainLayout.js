import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';



function MainLayout() {
  return (
    <div>
      <Navbar />
      {/* The Outlet renders the child route components */}
      <Outlet />
    </div>
  );
}

export default MainLayout;
