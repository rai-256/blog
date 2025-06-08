export const Textarea = ({ ref, onKeyDown, onClick, data_index, id }) => {
  return (
    <div
      className="w-full p-2 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      contentEditable="true"
      onKeyDown={onKeyDown}
      onClick={onClick}
      ref={ref}
      id={id}
      data-index={data_index}
    />
  );
};
