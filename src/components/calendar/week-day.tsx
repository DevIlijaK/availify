import Image from "next/image";
import { useEffect, useState } from "react";
import { type DaysOfWeek } from "~/lib/utils";
import { type Product } from "~/server/db/schema";
import { getProductsByDay } from "~/server/queries";

export const WeekDay = ({ day }: { day: DaysOfWeek }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProductsByDay(day);
      setProducts(response);
    };
    void getData();
  }, [day]);

  return (
    <div className="flex h-full w-full items-center">
      <div className="min-w-32 flex-shrink-0">
        <p>{day}:</p>
      </div>
      <div className="no-scrollbar flex gap-2 overflow-auto">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0">
            <Image
              src={product.imageUrl ?? ""}
              alt="Example Image"
              width={100}
              height={100}
              className="h-[60px] w-[60px] rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
