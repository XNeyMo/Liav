import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const useRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const Register = async (email, password) => {
    try {
      const username = email.split('@')[0];
      const phone = '+1234567890';

      const userPayload = { 
        username: username,
        email: email,
        phone: phone,
        password: password,
        admin: false
      };

      const response = await axios.post('https://liavback.onrender.com/user/create/', userPayload);
      console.log(response.data);
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { Register, error };
}

export default useRegister;
