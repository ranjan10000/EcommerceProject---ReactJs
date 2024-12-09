import React, { useState } from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import ProductSettings from './ProductSettings';
import UserSettings from './UserSettings';
import OrderDetails from './OrderDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'; // Custom CSS for additional styling
import '../css/Sidebar.css'; // Custom CSS for additional styling
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaUser, FaBell } from 'react-icons/fa';
import { IoIosGift } from 'react-icons/io';


export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const sidebarStyle = {
    width: sidebarCollapsed ? '50px' : '250px',
    transition: 'width 0.5s',
  };

  const handleMouseEnter = () => {
    if (!sidebarCollapsed) return;
      setSidebarCollapsed(false);
  };

  const handleMouseLeave = () => {
    if (sidebarCollapsed) return;
    setSidebarCollapsed(true);
  };

  return (
    <div className="d-flex">
      <div
        className="sidebar bg-light p-3"
        style={sidebarStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav>
          <ul className="nav flex-column">
            <li className="sidebar-header d-flex justify-content-between align-items-center">
              {!sidebarCollapsed && <h5 className="text-primary m-0">Settings</h5>}
              <span className="toggle-icon">
                {sidebarCollapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
              </span>
            </li>
            <li className="nav-item">
              <NavLink to="productsettings" className="nav-link">
                <IoIosGift />
                {!sidebarCollapsed && <span className="ms-2">Product Settings</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="usersettings" className="nav-link">
                <FaUser />
                {!sidebarCollapsed && <span className="ms-2">User Settings</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="orderdetails" className="nav-link">
                <FaBell />
                {!sidebarCollapsed && <span className="ms-2">Order Details</span>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`content p-3 ${sidebarCollapsed ? 'collapsed-content' : ''}`}  style={{width:'100%'}}>
      
        <Routes>
          <Route path="productsettings/*" element={<ProductSettings/>} />
          <Route path="usersettings" element={<UserSettings />} />
          <Route path="orderdetails" element={<OrderDetails />} />
        </Routes>  
      </div>
    </div>
  );
}
