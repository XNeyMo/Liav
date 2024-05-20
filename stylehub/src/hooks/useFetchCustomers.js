import { useState, useEffect } from 'react';

const useFetchCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('https://liavback.onrender.com/customer/all')
    .then(response => response.json())
    .then(data => {
        setCustomers(data);
    })
    .catch(error => console.error('Error:', error));
  });

  return customers;
}

export default useFetchCustomers;
