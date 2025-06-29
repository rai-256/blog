import { useState, useEffect } from 'react';

export const useSortContents = (
  contentsList,
  searchWord,
  sortBy,
  sortOrder
) => {
  const [filteredContentsList, setFilteredContentsList] = useState([]);

  useEffect(
    () => {
      const filtered = contentsList.filter(contents => {
        return contents.title.includes(searchWord);
      });

      const sortedFiltered = filtered.sort((a, b) => {
        let aValue, bValue;

        switch (sortBy) {
          case 'created_at':
            aValue = new Date(a.create_at);
            bValue = new Date(b.create_at);
            break;
          case 'updated_at':
            aValue = new Date(a.update_at);
            bValue = new Date(b.update_at);
            break;
          case 'title':
            aValue = a.title.toLowerCase();
            bValue = b.title.toLowerCase();
            break;
          case 'name':
            aValue = a.name.toLowerCase();
            bValue = b.name.toLowerCase();
            break;
          default:
            aValue = new Date(a.create_at);
            bValue = new Date(b.create_at);
        }

        if (sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      setFilteredContentsList(sortedFiltered);
    },
    [contentsList, searchWord, sortBy, sortOrder]
  );

  return filteredContentsList;
};
