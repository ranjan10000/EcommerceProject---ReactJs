import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';



function MainLayout({userRole}) {

  console.log('MainLayout'+userRole);
  return (
    <div>
      <Navbar  userRole= {userRole}/>
      {/* The Outlet renders the child route components */}
      <Outlet />
    </div>
  );
}

export default MainLayout;
