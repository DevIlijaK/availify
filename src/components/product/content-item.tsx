"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { type Product } from "~/server/db/schema";
import { deleteProduct } from "~/server/queries";
import { useMenuTheme } from "../theme-context";
import { ProductDrawer } from "../product-drawer";

// Original/Default Layout
const DefaultContentItem = ({
  product,
  editable,
  onSelect,
}: {
  product: Product;
  editable: boolean;
  onSelect: () => void;
}) => {
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
    <div
      className="relative flex cursor-pointer items-center gap-4 rounded-2xl border bg-background p-4"
      style={{
        backgroundColor: productCartBackgroundColor!,
        borderColor: borderColor!,
      }}
      onClick={onSelect}
    >
      {editable && product.id && (
        <div
          className="absolute right-0 top-0 cursor-pointer rounded-full p-2 hover:bg-gray-200"
          onClick={async (e) => {
            e.stopPropagation();
            await deleteProduct(product.id!);
          }}
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
            alt={product.title}
            width={100}
            height={100}
            className="h-[100px] w-[100px] rounded-xl object-cover"
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
  );
};

// Card Layout
const CardContentItem = ({
  product,
  editable,
  onSelect,
}: {
  product: Product;
  editable: boolean;
  onSelect: () => void;
}) => {
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
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl border transition-all hover:shadow-lg"
      style={{
        backgroundColor: productCartBackgroundColor!,
        borderColor: borderColor!,
      }}
      onClick={onSelect}
    >
      {editable && product.id && (
        <div
          className="absolute right-2 top-2 z-10 cursor-pointer rounded-full bg-white/80 p-2 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={async (e) => {
            e.stopPropagation();
            await deleteProduct(product.id!);
          }}
        >
          <Trash2 height={16} width={16} />
        </div>
      )}
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl ?? ""}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2
          className="mb-2 text-lg font-semibold"
          style={{ color: textColor! }}
        >
          {product.title}
        </h2>
        <p
          className="mb-4 line-clamp-2 text-sm"
          style={{ color: textMutedForeground! }}
        >
          {product.description}
        </p>
        <div
          className="inline-block rounded-full bg-muted px-4 py-2"
          style={{ color: textForeground! }}
        >
          <p className="text-sm font-bold">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

// Compact Layout
const CompactContentItem = ({
  product,
  editable,
  onSelect,
}: {
  product: Product;
  editable: boolean;
  onSelect: () => void;
}) => {
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
    <div
      className="relative flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-all hover:shadow-sm"
      style={{
        backgroundColor: productCartBackgroundColor!,
        borderColor: borderColor!,
      }}
      onClick={onSelect}
    >
      <div className="flex items-center gap-3">
        <div
          className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2"
          style={{ borderColor: borderColor! }}
        >
          <Image
            src={product.imageUrl ?? ""}
            alt={product.title}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-base font-medium" style={{ color: textColor! }}>
            {product.title}
          </h2>
          <p
            className="line-clamp-1 text-xs"
            style={{ color: textMutedForeground! }}
          >
            {product.description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div
          className="rounded-full bg-muted px-3 py-1"
          style={{ color: textForeground! }}
        >
          <p className="text-sm font-medium">{product.price}</p>
        </div>
        {editable && product.id && (
          <button
            className="rounded-full p-2 hover:bg-gray-100"
            onClick={async (e) => {
              e.stopPropagation();
              await deleteProduct(product.id!);
            }}
          >
            <Trash2 height={14} width={14} />
          </button>
        )}
      </div>
    </div>
  );
};

// Modern Layout
const ModernContentItem = ({
  product,
  editable,
  onSelect,
}: {
  product: Product;
  editable: boolean;
  onSelect: () => void;
}) => {
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
    <div
      className="group relative cursor-pointer overflow-hidden rounded-3xl border transition-all hover:shadow-lg"
      style={{
        backgroundColor: productCartBackgroundColor!,
        borderColor: borderColor!,
      }}
      onClick={onSelect}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.imageUrl ?? ""}
          alt={product.title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-xl font-semibold text-white">{product.title}</h2>
          <p className="text-sm text-white/80">{product.price}</p>
        </div>
      </div>
      <div className="p-4">
        <p
          className="line-clamp-2 text-sm"
          style={{ color: textMutedForeground! }}
        >
          {product.description}
        </p>
      </div>
      {editable && product.id && (
        <button
          className="absolute right-2 top-2 rounded-full bg-white/90 p-2 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={async (e) => {
            e.stopPropagation();
            await deleteProduct(product.id!);
          }}
        >
          <Trash2 height={16} width={16} />
        </button>
      )}
    </div>
  );
};

// Minimal Layout
const MinimalContentItem = ({
  product,
  editable,
  onSelect,
}: {
  product: Product;
  editable: boolean;
  onSelect: () => void;
}) => {
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
    <div
      className="group relative flex cursor-pointer items-center gap-3 border-b p-3 transition-colors hover:bg-gray-50"
      style={{
        borderColor: borderColor!,
      }}
      onClick={onSelect}
    >
      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={product.imageUrl ?? ""}
          alt={product.title}
          width={56}
          height={56}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h2 className="font-medium" style={{ color: textColor! }}>
            {product.title}
          </h2>
          <p className="text-sm" style={{ color: textMutedForeground! }}>
            {product.price}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {editable && product.id && (
            <button
              className="rounded-full p-1.5 opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100"
              onClick={async (e) => {
                e.stopPropagation();
                await deleteProduct(product.id!);
              }}
            >
              <Trash2 height={14} width={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Featured Layout
const FeaturedContentItem = ({
  product,
  editable,
  onSelect,
}: {
  product: Product;
  editable: boolean;
  onSelect: () => void;
}) => {
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
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md"
      style={{
        backgroundColor: productCartBackgroundColor!,
        borderColor: borderColor!,
      }}
      onClick={onSelect}
    >
      <div className="flex gap-4 p-4">
        <div className="relative aspect-square w-32 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src={product.imageUrl ?? ""}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold" style={{ color: textColor! }}>
              {product.title}
            </h2>
            <p
              className="mt-1 line-clamp-2 text-sm"
              style={{ color: textMutedForeground! }}
            >
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="rounded-full bg-muted px-4 py-1.5"
              style={{ color: textForeground! }}
            >
              <p className="font-medium">{product.price}</p>
            </div>
            {editable && product.id && (
              <button
                className="rounded-full p-2 opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100"
                onClick={async (e) => {
                  e.stopPropagation();
                  await deleteProduct(product.id!);
                }}
              >
                <Trash2 height={16} width={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component with Layout Selection
const ContentItem = ({
  product,
  editable,
  layout = "default",
}: {
  product: Product;
  editable: boolean;
  layout?: "default" | "card" | "compact" | "modern" | "minimal" | "featured";
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelect = () => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const layouts = {
    default: DefaultContentItem,
    card: CardContentItem,
    compact: CompactContentItem,
    modern: ModernContentItem,
    minimal: MinimalContentItem,
    featured: FeaturedContentItem,
  };

  const SelectedLayout = layouts[layout];

  return (
    <>
      <SelectedLayout
        product={product}
        editable={editable}
        onSelect={handleSelect}
      />
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
