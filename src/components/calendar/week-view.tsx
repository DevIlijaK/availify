"use client";

import { useState } from "react";

const WeekView = ({ editable }: { editable: boolean }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the start of the week (Sunday)
  const getStartOfWeek = (date: Date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);
    return startOfWeek;
  };

  // Function to change to the previous week
  const previousWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  // Function to change to the next week
  const nextWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  // Function to reset the date to the current week
  const thisWeek = () => {
    setCurrentDate(new Date());
  };

  // Get the start of the current week
  const startOfWeek = getStartOfWeek(currentDate);

  // Format the start and end dates of the current week
  const startOfWeekFormatted = startOfWeek.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  const endOfWeekFormatted = endOfWeek.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="mb-4 text-center">
        <h1 className="text-2xl font-bold">
          {startOfWeekFormatted} - {endOfWeekFormatted}
        </h1>
      </header>
      <div className="space-x-4">
        <button
          onClick={previousWeek}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Previous Week
        </button>
        <button
          onClick={thisWeek}
          className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          This Week
        </button>
        <button
          onClick={nextWeek}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Next Week
        </button>
      </div>
    </div>
  );
};

export default WeekView;
