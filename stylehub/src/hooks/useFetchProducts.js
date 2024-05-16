import { useState, useEffect } from 'react';

const useFetchProducts = (category) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/product/all')
    .then(response => response.json())
    .then(data => {
      if (category) {
        const filteredProducts = data.filter(product => product.category === category);
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
    })
    .catch(error => console.error('Error:', error));
  }, [category]);

  return products;
}

export default useFetchProducts;
