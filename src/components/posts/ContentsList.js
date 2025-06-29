import { ContentsCard } from './ContentsCard';

export const ContentsList = ({ filteredContentsList, onSubmit }) => {
  return filteredContentsList.length === 0
    ? <p className="text-muted-foreground">記事がありません</p>
    : <ul className="space-y-4">
        {filteredContentsList.map(contents =>
          <ContentsCard
            key={contents.id}
            contents={contents}
            onSubmit={onSubmit}
          />
        )}
      </ul>;
};
