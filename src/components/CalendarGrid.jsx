import DayCell from "./DayCell";

export default function CalendarGrid({ handleDateClick }) {
  return (
    <div className="grid grid-cols-7 gap-3">
      {Array.from({ length: 30 }).map((_, i) => (
        <DayCell key={i} day={i + 1} onClick={() => handleDateClick(i + 1)} />
      ))}
    </div>
  );
}
