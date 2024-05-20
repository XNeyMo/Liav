import { useState, useEffect } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://liavback.onrender.com/user/all')
    .then(response => response.json())
    .then(data => {
        setUsers(data);
    })
    .catch(error => console.error('Error:', error));
  });

  return users;
}

export default useFetchUsers;
