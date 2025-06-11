export const InputNumber = ({ label }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="numberField"
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id="numberField"
        type="number"
        placeholder="0"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
