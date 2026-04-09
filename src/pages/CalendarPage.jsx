// 🔥 STEP 3: RANGE SELECTION + HIGHLIGHT (MATCHES YOUR HTML LOGIC)

import { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Sidebar({ open, onClose, range }) {
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
      </div>
    </div>
  );
}

function DayCell({ day, state, onClick }) {
  const { start, end } = state;

  const isStart = start === day;
  const isEnd = end === day;
  const inRange = start && end && day > start && day < end;

  let cls =
    "aspect-[1/0.9] bg-white/5 border border-green-400/10 rounded-lg p-2 flex flex-col gap-1 cursor-pointer transition";

  if (inRange) cls += " bg-green-400/10 border-green-400/20";
  if (isStart || isEnd) cls += " bg-green-400/20 border-green-400";

  return (
    <div
      onClick={() => onClick(day)}
      className={`${cls} hover:bg-white/10 hover:border-green-400/30 hover:-translate-y-[1px]`}
    >
      <div className="text-xs text-gray-200">{day}</div>
    </div>
  );
}

function CalendarGrid({ state, handleClick }) {
  return (
    <>
      <div className="grid grid-cols-7 gap-[2px] mb-1">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-[10px] text-gray-500 uppercase tracking-widest py-2"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-[3px]">
        {Array.from({ length: 30 }).map((_, i) => (
          <DayCell key={i} day={i + 1} state={state} onClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default function CalendarPage() {
  const [rangeMode, setRangeMode] = useState(false);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (day) => {
    if (!rangeMode) {
      setSidebarOpen(true);
      return;
    }

    if (!start || end) {
      setStart(day);
      setEnd(null);
      setSidebarOpen(false);
    } else {
      if (day < start) {
        setEnd(start);
        setStart(day);
      } else {
        setEnd(day);
      }
      setSidebarOpen(true);
    }
  };

  const resetRange = () => {
    setStart(null);
    setEnd(null);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080c09] text-white relative">
      {/* GRID BG */}
      <div className="fixed inset-0 opacity-[0.04] bg-[linear-gradient(rgba(74,222,128,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* NAV */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-green-400/10 backdrop-blur bg-[#080c09]/90 sticky top-0 z-50">
        <div className="flex items-center gap-2 font-serif tracking-widest">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          CHRONO
        </div>

        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-green-400">←</button>
          <div className="text-sm font-serif">April 2026</div>
          <button className="text-gray-400 hover:text-green-400">→</button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setRangeMode(!rangeMode)}
            className={`px-3 py-1 text-xs border rounded ${rangeMode ? "bg-green-400/20 text-green-400 border-green-400" : "border-green-400/20 text-green-400"}`}
          >
            Range
          </button>

          <button
            onClick={resetRange}
            className="px-3 py-1 text-xs border border-green-400/20 text-green-400 rounded"
          >
            Reset
          </button>

          <button
            onClick={() => setSidebarOpen(true)}
            className="px-3 py-1 text-xs bg-green-400 text-black rounded font-semibold"
          >
            + Note
          </button>
        </div>
      </div>

      {/* LAYOUT */}
      <div className="flex">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          range={start && end ? { start, end } : null}
        />

        {/* MAIN */}
        <div className="flex-1 p-6">
          {/* STATS */}
          <div className="flex gap-3 mb-5 flex-wrap">
            <div className="bg-white/5 border border-green-400/10 px-4 py-2 rounded text-xs text-gray-400">
              <span className="text-green-400 font-semibold">30</span> days
            </div>

            {start && end && (
              <div className="bg-white/5 border border-green-400/10 px-4 py-2 rounded text-xs text-gray-400">
                Range:{" "}
                <span className="text-green-400">
                  {start} → {end}
                </span>
              </div>
            )}
          </div>

          {/* CALENDAR */}
          <CalendarGrid state={{ start, end }} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

/*
🔥 NOW IT MATCHES YOUR HTML BEHAVIOR:
✔ Click Range → select start
✔ Click again → select end
✔ Auto swap if reversed
✔ Highlight in-range
✔ Strong highlight for start/end
✔ Sidebar auto opens
✔ Reset button added

NEXT:
👉 Add notes per date (chips like your HTML)
👉 Add modal system (exact replica)
*/
