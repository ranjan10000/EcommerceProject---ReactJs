import React, { useState } from 'react';
import '../../src/components/css/UserSettings.css'

export default function UserModal({ isOpen, onClose, onCreate, roles}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [roleName, setRoleName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { userName, password, roleName };
    onCreate(newUser); // Pass the user data to the parent component
    onClose(); // Close the modal after creation
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="roleName">Role Name:</label>
            <select
              id="roleName"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              required
            > 
            <option value="">Select a Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-actions">
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
