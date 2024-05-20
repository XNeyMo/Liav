import { useState } from 'react';
import axios from 'axios';

const useUpdateCustomer = () => {
  const [error, setError] = useState(null);

  const updateCustomer = async (id, username, email, password, phone, credits) => {
    try {
      const customerPayload = { 
        username: username,
        email: email,
        phone: phone,
        password: password,
        credits: credits
      };

      const response = await axios.put(`https://liavback.onrender.com/customer/${id}/`, customerPayload);
      console.log(response.data);
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { updateCustomer, error };
}

export default useUpdateCustomer;
