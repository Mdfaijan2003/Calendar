export default function RangeSidebar({ isOpen }) {
  return (
    <div
      className={`w-80 bg-gray-800 p-4 transition transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed right-0 top-0 h-full`}
    >
      <h2 className="text-xl mb-4">Notes</h2>
      <textarea className="w-full h-40 bg-gray-700 p-2 rounded" />
    </div>
  );
}
