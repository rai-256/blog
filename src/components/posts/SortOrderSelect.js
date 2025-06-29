import React from 'react';

export const SortOrderSelect = ({ sortOrder, setSortOrder }) => {
  return (
    <select
      value={sortOrder}
      onChange={e => setSortOrder(e.target.value)}
      className="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <option value="asc">昇順</option>
      <option value="desc">降順</option>
    </select>
  );
};
