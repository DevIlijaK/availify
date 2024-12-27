"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image"; // Assuming you're using Next.js Image component
import { type Product } from "~/server/db/schema";
import { deleteProduct } from "~/server/queries";
import { ProductDrawer } from "../product-drawer";
import { useState } from "react";
import { useMenuTheme } from "../theme-context";

const ContentItem = ({
  product,
  editable,
}: {
  product: Product;
  editable: boolean;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    theme: { borderColor },
  } = useMenuTheme();

  return (
    <>
      <div
        className="relative flex cursor-pointer items-center gap-4 border-b-2 p-2"
        onClick={() => {
          setSelectedProduct(product);
          setIsDrawerOpen(true);
        }}
      >
        {editable && product.id && (
          <div
            className="absolute right-0 top-0 cursor-pointer rounded-full p-2 hover:bg-gray-200"
            onClick={() => product.id && deleteProduct(product.id)}
          >
            <Trash2 height={16} width={16} />
          </div>
        )}
        {borderColor && (
          <div
            className="flex-shrink-0 rounded-2xl border-2"
            style={{ borderColor }}
          >
            <Image
              src={product.imageUrl ?? ""}
              alt="Example Image"
              width={100}
              height={100}
              className="h-[100px] w-[100px] rounded-2xl"
            />
          </div>
        )}

        <div className="flex h-full flex-1 flex-col justify-between">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">{product.title}</h2>
            <p className="max-h-16 overflow-hidden text-xs">
              {product.description}
            </p>
          </div>
          <p className="text-sm">{product.price}</p>
        </div>
      </div>
      {selectedProduct && (
        <ProductDrawer
          product={selectedProduct}
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        />
      )}
    </>
  );
};

export default ContentItem;
