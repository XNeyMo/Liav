import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { useAuth } from './useAuth';

const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { setAuth } = useAuth();

  const Login = async (email, password) => {
    try {
      const response = await axios.get(`https://liavback.onrender.com/user/${email}`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        }
      });
      
      const user = response.data;
      if (user.password === password) {
        setAuth({ isAuthenticated: true, isAdmin: user.admin, user });
        navigate(user.admin ? '/admin' : '/');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { Login, error };
}

export default useLogin;
