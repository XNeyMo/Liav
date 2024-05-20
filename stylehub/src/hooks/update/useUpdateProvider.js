import { useState } from 'react';
import axios from 'axios';

const useUpdateProvider = () => {
  const [error, setError] = useState(null);

  const updateProvider = async (id, formData) => {
    try {
      const providerPayload = {
        name: formData.name,
        email: formData.username,
        phone: formData.phone,
        address: {
          street: formData.address.street,
          city: formData.address.city,
          state: formData.address.state,
          zip: formData.address.zip,
          country: formData.address.country,
        },
        products: formData.products,
      };

      const response = await axios.put(`https://liavback.onrender.com/provider/${id}/`, providerPayload);
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { updateProvider, error };
}

export default useUpdateProvider;
