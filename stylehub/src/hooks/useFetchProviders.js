import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://liavback.onrender.com/provider/all', {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
        setProviders(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

  }, []);

  return providers;
}

export default useFetchProviders;
