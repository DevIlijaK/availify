"use client";

import { useEffect, useState } from "react";
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

  return (
    <div className="flex h-full flex-col items-center justify-between overflow-hidden bg-transparent py-4">
      <div className="no-scrollbar flex h-full w-full flex-col justify-between overflow-y-scroll">
        {productsByDay?.map(({ day, products }) => {
          return day === "Nedelja" ? (
            <div
              key={day}
              className="flex h-24 w-full flex-shrink-0 items-center"
            >
              <p>Nedeljom ne radimo!</p>
            </div>
          ) : (
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
    </div>
  );
};

export default WeekView;
