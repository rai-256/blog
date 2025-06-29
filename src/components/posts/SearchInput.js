import React from 'react';
import { Input } from 'components/ui/input';

export const SearchInput = ({ searchWord, setSearchWord }) => {
  return (
    <Input
      type="text"
      placeholder="記事のタイトルで検索..."
      value={searchWord}
      onChange={e => setSearchWord(e.target.value)}
      className="flex-1 h-10 text-base"
    />
  );
};
