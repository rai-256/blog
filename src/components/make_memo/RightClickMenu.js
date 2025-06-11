export const RightClickMenu = ({ clickY, clickX }) => {
  //const yClassName = 'top-' + Math.floor(clickY / 4);
  //const xClassName = 'left-' + Math.floor(clickX / 4);
  return (
    // <div className={'absolute ' + yClassName + ' ' + xClassName}>
    // <div className="absolute top-25 left-92">
    <div className="absolute" style={{ top: clickY, left: clickX }}>
      <MenuItem>画像</MenuItem>
      <MenuItem>リンク</MenuItem>
      <MenuItem>表</MenuItem>
      <MenuItem>コード</MenuItem>
      <MenuItem>箇条書き</MenuItem>
      <MenuItem>番号付きリスト</MenuItem>
      <MenuItem>水平線</MenuItem>
      <MenuItem>削除</MenuItem>
    </div>
  );
};
const MenuItem = ({ children }) => {
  return (
    <div className="w-60">
      {children}
    </div>
  );
};

//absolute top-25 left-92
//absolute top-25 left-89
