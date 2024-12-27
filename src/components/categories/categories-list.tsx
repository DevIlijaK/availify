"use client";
import { type FC } from "react";
import { type ProductCategory } from "~/server/db/schema";
import { Icon, type IconName } from "../icon";
import { useMenuTheme } from "../theme-context";
import { cn } from "~/lib/utils";

export const CategoriesList: FC<{ categories: ProductCategory[] }> = ({
  categories,
}) => {
  const {
    theme: { iconColor, borderColor, backgroundColor, textColor },
  } = useMenuTheme();

  return (
    iconColor &&
    borderColor &&
    backgroundColor &&
    textColor && (
      <div
        className={cn(
          "no-scrollbar flex w-full flex-shrink-0 cursor-pointer justify-start gap-2 overflow-x-scroll",
        )}
      >
        {categories.map((category) => (
          <div
            className={cn(
              "justify-centerrounded-full flex h-16 w-16 items-center rounded-full border-2 p-4",
            )}
            style={{
              borderColor: borderColor,
              backgroundColor: backgroundColor,
            }}
            key={category.id}
          >
            <Icon
              name={category.iconName as IconName}
              className="flex-shrink-0"
              style={{ color: iconColor }}
            />
          </div>
        ))}
      </div>
    )
  );
};
