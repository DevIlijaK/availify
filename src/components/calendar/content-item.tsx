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
    theme: {
      borderColor,
      textForeground,
      textMutedForeground,
      textColor,
      productCartBackgroundColor,
    },
  } = useMenuTheme();

  return (
    <>
      <div
        className="relative flex cursor-pointer items-center gap-4 rounded-2xl border bg-background p-4"
        style={{
          backgroundColor: productCartBackgroundColor!,
          borderColor: borderColor!,
        }}
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
              className="h-[100px] w-[100px] rounded-xl"
            />
          </div>
        )}

        <div className="flex h-full flex-1 flex-col items-start gap-4">
          <div className="flex flex-col">
            <h2
              className="text-lg font-medium leading-6"
              style={{ color: textColor! }}
            >
              {product.title}
            </h2>
            <p
              className="max-h-16 overflow-hidden text-sm"
              style={{ color: textMutedForeground! }}
            >
              {product.description}
            </p>
          </div>
          <div
            className="w-fit rounded-full bg-muted px-4 py-2 text-foreground"
            style={{ color: textForeground! }}
          >
            <p className="text-sm font-semibold">{product.price}</p>
          </div>
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
