import { useState } from 'react';

const useAdminPage = () => {
  const [selectedPage, setSelectedPage] = useState('userManagement');

  const changePage = (page) => {
    setSelectedPage(page);
  }

  return { selectedPage, changePage };
}

export default useAdminPage;
