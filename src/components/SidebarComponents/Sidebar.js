import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AccountSettings from './AccountSettings';
import PrivacySettings from './PrivacySettings';
import NotificationSettings from './NotificationSettings';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'; // Custom CSS for additional styling
import '../css/Sidebar.css'; // Custom CSS for additional styling
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaUser, FaShieldAlt, FaBell } from "react-icons/fa";

export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  // const toggleSidebar = () => {
  //   setSidebarCollapsed(!sidebarCollapsed);
  // };

  const handleMouseEnter = () => {
    setSidebarCollapsed(false);
  };

  const handleMouseLeave = () => {
    setSidebarCollapsed(true);
  
  };


  const sidebarStyle = {
    width: sidebarCollapsed ? '50px' : '250px', // Adjust sidebar width here
    transition: 'width 0.3s',

  };


    const changePosition = {
      display: sidebarCollapsed ? 'flex' : 'block',
    }
  return (
    <div className="d-flex" >
      <div className="sidebar bg-light p-3" style={sidebarStyle}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <nav>
          <ul className="nav flex-column">
          <li className="sidebar-header d-flex justify-content-between align-items-center" style={changePosition}>
          {!sidebarCollapsed && <h5 className="text-primary m-0">Settings</h5>} 
          <span className="toggle-icon">
            {sidebarCollapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </span>
        </li>
            <li className="nav-item">
              <NavLink to="account" className="nav-link" activeClassName="active">
                <FaUser />
                {!sidebarCollapsed && <span className="ms-2">Account Settings</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="privacy" className="nav-link" activeClassName="active">
                <FaShieldAlt />
                {!sidebarCollapsed && <span className="ms-2">Privacy Settings</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="notifications" className="nav-link" activeClassName="active">
                <FaBell />
                {!sidebarCollapsed && <span className="ms-2">Notification Settings</span>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`content p-3 ${sidebarCollapsed ? 'collapsed-content' : ''}`}>
        <Routes>
          <Route path="account/*" element={<AccountSettings sidebarCollapsed={sidebarCollapsed} />} />
          <Route path="privacy" element={<PrivacySettings />} />
          <Route path="notifications" element={<NotificationSettings />} />
        </Routes>
      </div>
    </div>
  );
}
