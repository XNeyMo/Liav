import { useState, useEffect } from 'react';
import axios from 'axios';

const useUpdateUser = () => {
  const [error, setError] = useState(null);

  const updateUser = async (id, username, email, password, phone, admin) => {
    try {
      const userPayload = { 
        username: username,
        email: email,
        phone: phone,
        password: password,
        admin: admin
      };

      const response = await axios.put(`https://liavback.onrender.com/user/${id}/`, userPayload);
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { updateUser, error };
}

export default useUpdateUser;
