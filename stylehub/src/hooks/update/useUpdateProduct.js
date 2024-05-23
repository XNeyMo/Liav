import { useState } from 'react';
import axios from 'axios';

const useUpdateProduct = () => {
  const [error, setError] = useState(null);

  const updateProduct = async (id, formData) => {
    try {
      const productPayload = {
        provider_id: formData.provider_id,
        name: formData.name,
        price: formData.price,
        stock: formData.stock,
        category: formData.category,
        imgref: formData.imgref,
      };

      if (id) {
        await axios.put(`https://liavback.onrender.com/product/${id}/`, productPayload, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
      } else {
        await axios.post('https://liavback.onrender.com/product/create/', productPayload, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
      }
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { updateProduct, error };
}

export default useUpdateProduct;
