"use client";

import { type FC } from "react";
import { type Product } from "~/server/db/schema";
import { useMenuTheme } from "../theme-context";
import { cn } from "~/lib/utils";
import ContentItem from "./content-item";

const gridLayoutClasses = {
  list: "flex flex-col gap-4",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  compact: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3",
} as const;

export const ProductList: FC<{ products: Product[]; className?: string }> = ({
  products,
  className,
}) => {
  const {
    theme: { backgroundColor, cartLayout, gridLayout },
  } = useMenuTheme();

  return (
    backgroundColor && (
      <div
        className={cn(
          "no-scrollbar h-full w-full overflow-y-auto p-4",
          gridLayoutClasses[gridLayout as keyof typeof gridLayoutClasses],
          className,
        )}
      >
        {products.map((product) => (
          <ContentItem
            editable={false}
            product={product}
            key={product.id}
            layout={cartLayout as "default" | "card" | "compact"}
          />
        ))}
      </div>
    )
  );
};
