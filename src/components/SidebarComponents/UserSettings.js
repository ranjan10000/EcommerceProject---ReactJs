import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, registerUser } from '../../slice/userSlice';
import '../css/UserSettings.css';
import UserModal from '../../Modal/UserModal';

export default function UserSettings() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

console.log('users' +  JSON.stringify(users));
console.log('loading' + loading);
console.log('error' + error);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  const handleCreateUser = (newUser) => {
    dispatch(registerUser(newUser));
  };

  const roles = ['Admin', 'User', 'Editor']; 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
debugger
  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setIsModalOpen(true)}>Create User</button>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateUser}
          roles={roles} 
      />
      
      {users && users.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Role</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userName}</td>
                <td>{user.roleName}</td>
                <td>
                  {user.features.length > 0 ? (
                    <ul>
                      {user.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No features assigned</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
