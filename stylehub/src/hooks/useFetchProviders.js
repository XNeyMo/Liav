import { useState, useEffect } from 'react';

const useFetchProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch('https://liavback.onrender.com/provider/all')
    .then(response => response.json())
    .then(data => {
        setProviders(data);
    })
    .catch(error => console.error('Error:', error));
  });

  return providers;
}

export default useFetchProviders;
