import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://liavback.onrender.com/customer/all', {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
        setCustomers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

  }, []);

  return customers;
}

export default useFetchCustomers;
