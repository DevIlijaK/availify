import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type DaysOfWeek } from "~/lib/utils";
import { type Product } from "~/server/db/schema";
import { getProductsByDay } from "~/server/queries";
import { ProductDrawer } from "../product-drawer";

export const WeekDay = ({ day }: { day: DaysOfWeek }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getProductsByDay(day);
      setProducts(response);
    };
    void getData();
  }, [day]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="min-w-24 flex-shrink-0 border-b p-1">
        <p>
          {day}, dostupno {products.length}{" "}
          {products.length === 1 ? "jelo" : "jela"}
        </p>
      </div>
      <div className="flex h-full p-2">
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex max-w-full gap-2 overflow-x-scroll"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              onClick={() => {
                setSelectedProduct(product);
                setIsDrawerOpen(true);
              }}
            >
              <Image
                src={product.imageUrl ?? ""}
                alt="Example Image"
                width={100}
                height={100}
                className="h-[100px] w-[100px] rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductDrawer
          product={selectedProduct}
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        />
      )}
    </div>
  );
};
