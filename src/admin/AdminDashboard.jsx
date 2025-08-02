import React, { useContext } from 'react';
import { AuthContext } from '../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/Admin/ProductList';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
    // Redirect to login or unauthorized page
    navigate('/login'); // Or navigate('/unauthorized');
    return null; // Prevent rendering the dashboard
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ProductList />
    </div>
  );
};

export default AdminDashboard;