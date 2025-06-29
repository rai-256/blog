import { FilePenLine } from 'lucide-react';
import { Button } from 'components/ui/button';
import { 
  SearchInput, 
  SortBySelect, 
  SortOrderSelect, 
  ContentsEditor 
} from './index';
import * as type from 'app/api-client/type';
import { useState, useEffect } from 'react';

export const ContentsControls = ({ controls, onSubmit, handleUpdate }) => {
  const { 
    searchWord, 
    setSearchWord, 
    sortBy, 
    setSortBy, 
    sortOrder, 
    setSortOrder 
  } = controls;
  const [type_id, setTypeId] = useState(0);
  const getTypeId = async () => {
    const typePost = await type.getTypePostId();
    setTypeId(typePost);
    console.log('type_id:', typePost);
  };
  useEffect(() => {
    getTypeId();
  }, []);

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <SearchInput
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <SortBySelect sortBy={sortBy} setSortBy={setSortBy} />
          <SortOrderSelect
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
        <ContentsEditor onSubmit={onSubmit} type_id={type_id} handleUpdate={handleUpdate}>
          <Button variant="outline" size="sm">
            <FilePenLine className="w-4 h-4 mr-2" />
            新規記事作成
          </Button>
        </ContentsEditor>
      </div>
    </>
  );
};