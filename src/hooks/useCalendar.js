import { useState } from "react";

export function useCalendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateClick = (date) => {
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
    }
  };

  return {
    currentDate,
    startDate,
    endDate,
    handleDateClick,
    isRangeSelected: startDate && endDate,
  };
}
