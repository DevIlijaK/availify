"use client";

import { type FC } from "react";
import { type Product } from "~/server/db/schema";
import ContentItem from "../calendar/content-item";
import { useMenuTheme } from "../theme-context";
import { cn } from "~/lib/utils";

export const ProductList: FC<{ products: Product[]; className: string }> = ({
  products,
  className,
}) => {
  const {
    theme: { backgroundColor },
  } = useMenuTheme();

  return (
    backgroundColor && (
      <div
        className={cn(
          "no-scrollbar flex h-full w-full flex-col gap-4 overflow-y-auto",
          className,
        )}
      >
        {products.map((product) => (
          <ContentItem editable={false} product={product} key={product.id} />
        ))}
      </div>
    )
  );
};
