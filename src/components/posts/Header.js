export const Header = ({ contentsCount, sortBy, sortOrder, statusMessage }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">記事一覧</h1>
          <p className="text-muted-foreground">保存された記事を管理できます</p>

          {statusMessage &&
            <p className="text-3xl font-bold">
              {statusMessage}
            </p>}
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>
          {contentsCount} 件の記事
        </span>
        <span>
          {sortBy === 'created_at' && '作成日時'}
          {sortBy === 'updated_at' && '更新日時'}
          {sortBy === 'title' && 'タイトル'}
          {sortBy === 'name' && 'ファイル名'}で
          {sortOrder === 'asc' ? '昇順' : '降順'}
        </span>
      </div>
    </div>
  );
};
