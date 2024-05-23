import { useState } from 'react';
import axios from 'axios';

const useUpdateProvider = () => {
  const [error, setError] = useState(null);

  const updateProvider = async (id, formData) => {
    try {
      const providerPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: {
          street: formData.address.street,
          city: formData.address.city,
          state: formData.address.state,
          zip: formData.address.zip,
          country: formData.address.country,
        },
        products_id: formData.products_id,
      };

      if (id) {
        await axios.put(`https://liavback.onrender.com/provider/${id}/`, providerPayload, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
      } else {
        await axios.post('https://liavback.onrender.com/provider/create/', providerPayload, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
      }
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { updateProvider, error };
}

export default useUpdateProvider;
