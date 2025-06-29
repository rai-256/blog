'use client';
import { useState, useEffect } from 'react';

// API関連
import * as contents from 'app/api-client/contents';

// UIコンポーネント
import {
  useContentsManager,
  useSortContents,
  useContentsControls
} from 'hooks';
import { ContentsList, Header, ContentsControls } from 'components/posts';

export default function topPage() {
  const [contentsCount, setContentsCount] = useState(null);
  const [contentsList, setContentsList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = () => {
    setIsUpdate(true);
  };
  useEffect(
    () => {
      if (isUpdate) {
        getContentsList();
        setIsUpdate(false);
      }
    },
    [isUpdate]
  );

  const controls = useContentsControls();
  const filteredContentsList = useSortContents(
    contentsList,
    controls.searchWord,
    controls.sortBy,
    controls.sortOrder
  );

  const getContentsList = async () => {
    const data = await contents.getContents();
    setContentsList(data);
    setContentsCount(data.length);
  };

  useEffect(() => {
    getContentsList();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Header
            contentsCount={contentsCount}
            sortBy={controls.sortBy}
            sortOrder={controls.sortOrder}
          />
          <ContentsControls controls={controls} handleUpdate={handleUpdate} />
        </div>
        <ContentsList filteredContentsList={filteredContentsList} />
      </div>
    </div>
  );
}