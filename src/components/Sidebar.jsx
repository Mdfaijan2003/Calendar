export default function Sidebar({ open, onClose, range }) {
  return (
    <div
      className={`transition-all duration-300 bg-[#0d1410] border-r border-green-400/10 ${open ? "w-[320px]" : "w-0"} overflow-hidden`}
    >
      <div className="w-[320px] h-full p-5 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-green-400 font-serif text-sm">📅 Range Notes</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <div className="text-xs text-gray-400 bg-white/5 border border-green-400/10 px-3 py-2 rounded">
          {range ? `${range.start} → ${range.end}` : "Select dates"}
        </div>

        <div className="text-sm text-gray-500">No notes yet</div>

        <button className="border border-green-400/20 text-green-400 px-3 py-2 rounded text-xs hover:bg-green-400/10">
          + Add note
        </button>
      </div>
    </div>
  );
}
