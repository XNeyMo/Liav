import { useState } from 'react';
import axios from 'axios';

const useDelete = () => {
  const [error, setError] = useState(null);

  const deleteEntity = async (type, id) => {
    try {
      setError(null);
      let url;

      switch (type) {
        case 'user':
          url = `https://liavback.onrender.com/user/${id}/`;
          break;
        case 'customer':
          url = `https://liavback.onrender.com/customer/${id}/`;
          break;
        case 'product':
          url = `https://liavback.onrender.com/product/${id}/`;
          break;
        case 'provider':
          url = `https://liavback.onrender.com/provider/${id}/`;
          break;
        default:
          throw new Error('Invalid entity type');
      }

      await axios.delete(url);
    } catch (error) {
      setError(error.response?.data?.detail || 'Unknown error');
    }
  }

  return { deleteEntity, error };
}

export default useDelete;

