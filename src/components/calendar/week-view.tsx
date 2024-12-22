"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { DaysOfWeek } from "~/lib/utils";
import { WeekDay } from "./week-day";

const WeekView = ({ editable }: { editable: boolean }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState<
    | Record<
        string,
        {
          title: string;
          description: string;
          price: string;
          imageUrl: string;
          id?: string | undefined;
          createdAt?: Date | undefined;
          updatedAt?: Date | null | undefined;
        }[]
      >
    | undefined
  >(undefined);

  // Function to get the start of the week (Monday)
  const getStartOfWeek = (date: Date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - (day === 0 ? 6 : day - 1); // Adjust for Monday
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
    <div className="flex h-full flex-col items-center justify-between overflow-hidden bg-transparent">
      <header className="mb-4 text-center">
        <h1 className="font-bold">
          {startOfWeekFormatted} - {endOfWeekFormatted}
        </h1>
      </header>
      <div className="no-scrollbar flex h-full w-full flex-col justify-between overflow-y-scroll">
        {Object.entries(DaysOfWeek).map(([key, value]) => (
          <WeekDay key={key} day={value} />
        ))}
      </div>

      <div className="flex w-full items-center justify-between gap-4 pt-4">
        <div
          onClick={previousWeek}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronLeft />
        </div>
        <Button
          onClick={thisWeek}
          variant="outline"
          className="rounded-full px-6"
        >
          Trenutna nedelja
        </Button>

        <div
          onClick={nextWeek}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default WeekView;
