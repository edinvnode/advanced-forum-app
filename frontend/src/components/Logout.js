// src/components/Logout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext(); // Assuming you use context to manage auth

  useEffect(() => {
    // Clear the user from localStorage
    localStorage.removeItem('user');

    // Dispatch logout action to update context
    dispatch({ type: 'LOGOUT' });

    // Redirect to login
    navigate('/login');
  }, [dispatch, navigate]);

  return null; // No UI
};

export default Logout;
