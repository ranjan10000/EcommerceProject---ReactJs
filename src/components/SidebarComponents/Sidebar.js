import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AccountSettings from './AccountSettings';
import PrivacySettings from './PrivacySettings';
import NotificationSettings from './NotificationSettings';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sidebar.css'; // Custom CSS for additional styling

export default function Sidebar() {
  return (
    <div className="d-flex">
      <div className="sidebar bg-light p-3">
        <h5 className="text-primary">Settings</h5>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="account" className="nav-link" activeClassName="active" > Account Settings </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="privacy" className="nav-link" activeClassName="active"> Privacy Settings </NavLink>
            </li>
            <li className="nav-item"><NavLink to="notifications" className="nav-link" activeClassName="active">Notification Settings</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content p-3">
        <Routes>
          <Route path="account/*" element={<AccountSettings />} />
          <Route path="privacy" element={<PrivacySettings />} />
          <Route path="notifications" element={<NotificationSettings />} />
        </Routes>
      </div>
    </div>
  );
}
