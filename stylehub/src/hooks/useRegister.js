import { useState } from 'react';
import axios from 'axios';

const useRegister = () => {
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

      await axios.post('https://liavback.onrender.com/user/create/', userPayload, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        }
      });
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { Register, error };
}

export default useRegister;
