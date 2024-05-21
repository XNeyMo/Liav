import { useState } from 'react';

const useSearch = (item, searchField) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = item.filter((item) =>
    item[searchField].toLowerCase().includes(search.toLowerCase())
  );

  return { search, handleSearch, filteredItems };
}

export default useSearch;
