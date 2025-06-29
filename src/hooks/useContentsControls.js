import { useState } from 'react';

export const useContentsControls = () => {
  const [searchWord, setSearchWord] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');

  return {
    searchWord,
    setSearchWord,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder
  };
};
