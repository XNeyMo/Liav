import { useState } from 'react';
import axios from 'axios';

const useUpdateCustomer = () => {
  const [error, setError] = useState(null);

  const updateCustomer = async (id, formData) => {
    try {
      const customerPayload = {
        user_id: formData.user_id,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        credits: formData.credits,
        address: {
          street: formData.address.street,
          city: formData.address.city,
          state: formData.address.state,
          zip: formData.address.zip,
          country: formData.address.country,
        },
      };

      await axios.put(`https://liavback.onrender.com/customer/${id}/`, customerPayload, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { updateCustomer, error };
}

export default useUpdateCustomer;
