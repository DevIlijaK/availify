"use client";

import { type FC } from "react";
import { type Product } from "~/server/db/schema";
import ContentItem from "../calendar/content-item";
import { useMenuTheme } from "../theme-context";

export const ProductList: FC<{ products: Product[] }> = ({ products }) => {
  const {
    theme: { backgroundColor },
  } = useMenuTheme();

  return (
    backgroundColor && (
      <div className="no-scrollbar flex h-full w-full flex-col gap-4 overflow-y-auto">
        {products.map((product) => (
          <ContentItem editable={false} product={product} key={product.id} />
        ))}
      </div>
    )
  );
};
