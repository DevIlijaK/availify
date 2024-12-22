"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Frown } from "lucide-react";
import { DaysOfWeek } from "~/lib/utils";
import ContentItem from "./content-item";
import { getProductsByDay } from "~/server/queries";
import { type Product } from "~/server/db/schema";

const getDayOfWeek = (date: Date) => {
  const daysMap: Record<number, DaysOfWeek> = {
    0: DaysOfWeek.SUNDAY,
    1: DaysOfWeek.MONDAY,
    2: DaysOfWeek.TUESDAY,
    3: DaysOfWeek.WEDNESDAY,
    4: DaysOfWeek.THURSDAY,
    5: DaysOfWeek.FRIDAY,
    6: DaysOfWeek.SATURDAY,
  };
  return daysMap[date.getDay()];
};

const DayView = ({ editable }: { editable: boolean }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [products, setProducts] = useState<Product[]>([]);

  // Function to change the date to the previous day
  const previousDay = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  // Function to change the date to the next day
  const nextDay = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  // Function to reset the date to today
  const today = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const getData = async () => {
      const day = getDayOfWeek(currentDate);
      if (day) {
        const response = await getProductsByDay(day);
        setProducts(response);
      }
    };
    void getData();
  }, [currentDate]);

  const formattedDate = currentDate.toLocaleDateString("sr-Latn", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="flex h-full flex-col items-center justify-between overflow-hidden bg-transparent">
      <header className="bg-transparent py-4 text-center">
        <h1 className="font-bold">{formattedDate}</h1>
      </header>

      {currentDate.getDay() === 0 ? (
        <div className="flex gap-4 rounded-lg border p-4">
          <h2>Nedeljom ne radimo</h2>
          <Frown />
        </div>
      ) : (
        <div className="no-scrollbar flex h-full w-full flex-col gap-4 overflow-y-auto">
          {products.map((product) => (
            <ContentItem
              editable={editable}
              product={product}
              key={product.id}
            />
          ))}
        </div>
      )}

      <div className="flex w-full items-center justify-between gap-4 pt-4">
        <div
          onClick={previousDay}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronLeft />
        </div>
        <Button onClick={today} variant="outline" className="rounded-full px-6">
          Danas
        </Button>

        <div
          onClick={nextDay}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default DayView;
