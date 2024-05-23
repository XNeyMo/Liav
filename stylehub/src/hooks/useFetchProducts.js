import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (category) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://liavback.onrender.com/product/all', {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }
        });

        let data = response.data;
        if (category) {
          data = data.filter(product => product.category === category);
        }

        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

  }, [category]);

  return products;
}

export default useFetchProducts;
