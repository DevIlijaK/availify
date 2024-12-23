"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getProducts } from "~/server/queries";
import { type Product } from "~/server/db/schema";
import { WeekDay } from "./week-day";

const WeekView = ({ editable }: { editable: boolean }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [productsByDay, setProductsByDay] = useState<
    | {
        day: string;
        products: Product[];
      }[]
    | undefined
  >(undefined);

  console.log(productsByDay);

  useEffect(() => {
    const getData = async () => {
      const result = await getProducts();
      setProductsByDay(result);
    };
    void getData();
  }, []);

  const getStartOfWeek = (date: Date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - (day === 0 ? 6 : day - 1); // Adjust for Monday
    startOfWeek.setDate(diff);
    return startOfWeek;
  };

  const previousWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const nextWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  const thisWeek = () => {
    setCurrentDate(new Date());
  };

  const startOfWeek = getStartOfWeek(currentDate);

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
        {productsByDay?.map(({ day, products }) => {
          return (
            <div key={day} className="flex h-full w-full flex-col">
              <div className="min-w-24 flex-shrink-0 border-b p-1">
                <p>
                  {day}, dostupno {products.length}{" "}
                  {products.length === 1 ? "jelo" : "jela"}
                </p>
              </div>
              <WeekDay products={products} />
            </div>
          );
        })}
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
