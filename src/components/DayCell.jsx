export default function DayCell({ day, onClick }) {
  return (
    <div
      onClick={onClick}
      className="aspect-[1/0.9] bg-white/5 border border-green-400/10 rounded-lg p-2 flex flex-col gap-1 cursor-pointer transition
      hover:bg-white/10 hover:border-green-400/30 hover:-translate-y-[1px]"
    >
      <div className="text-xs text-gray-200">{day}</div>
    </div>
  );
}
