import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://liavback.onrender.com/user/all', {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

  }, []);

  return users;
}

export default useFetchUsers;

