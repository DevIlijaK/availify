import Image from "next/image";
import { useRef, useState } from "react";
import { type Product } from "~/server/db/schema";
import { ProductDrawer } from "../product-drawer";

export const WeekDay = ({ products }: { products: Product[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
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
