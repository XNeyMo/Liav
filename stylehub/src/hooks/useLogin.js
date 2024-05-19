import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const useLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const Login = async (email, password) => {
    try {
      const response = await axios.get(`https://liavback.onrender.com/user/${email}`);
      const user = response.data;

      if (user.password === password) {
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
