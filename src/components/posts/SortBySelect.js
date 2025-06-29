export const SortBySelect = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={e => setSortBy(e.target.value)}
      className="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <option value="created_at">作成日時</option>
      <option value="updated_at">更新日時</option>
      <option value="title">タイトル</option>
      <option value="name">名前</option>
    </select>
  );
};
