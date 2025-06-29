'use client';
import { ContentsEditor } from 'components/posts';
import { useContentsManager } from 'hooks/useContentsManager';

export default function MakeContents() {
  return (
    <div className="min-h-screen bg-background">
      <ContentsEditor>
        <span>Make Contents</span>
      </ContentsEditor>
    </div>
  );
}
