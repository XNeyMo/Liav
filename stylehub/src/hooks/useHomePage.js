import { useState } from 'react';

const useHomePage = () => {
  const [selectedPage, setSelectedPage] = useState('tops');

  const changePage = (page) => {
    setSelectedPage(page);
  }

  return { selectedPage, changePage };
}

export default useHomePage;
