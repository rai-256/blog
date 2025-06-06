export function InputFileName() {
  return (
    <input
      type="text"
      placeholder="ファイル名"
      className="w-full h-10 px-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
      id="file_name"
      name="file_name"
      required
    />
  );
}
