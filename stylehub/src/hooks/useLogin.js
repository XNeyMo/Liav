import { useState, useEffect } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [error, setError] = useState(null);
  
  const Login = async (email, password) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/user/${email}`);
      const user = response.data;

      if (user.password === password) {
        return user;
      } else {
        setError('Invalid credentials');
        return null;
      }
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
      return null;
    }
  }

  return { Login, error };
}

export default useLogin;
