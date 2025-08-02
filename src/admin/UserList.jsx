import React, { useState, useEffect, useContext } from 'react';
import apiService from '../utils/api';
import { AuthContext } from '../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await apiService.getUsers();
        setUsers(response);
      } catch (err) {
        setError(err.message || 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    if (user && user.role === 'admin') {
      fetchUsers();
    } else {
      navigate('/login'); // Or an unauthorized page
    }
  }, [user, navigate]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user || user.role !== 'admin') {
    return <p>You are not authorized to view this page.</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;