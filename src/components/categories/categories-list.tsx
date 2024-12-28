"use client";
import { type FC } from "react";
import { type ProductCategory } from "~/server/db/schema";
import { Icon, type IconName } from "../icon";
import { useMenuTheme } from "../theme-context";
import { cn } from "~/lib/utils";

export const CategoriesList: FC<{
  categories: ProductCategory[];
  className: string;
}> = ({ categories, className }) => {
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
          "no-scrollbar fixed z-10 flex w-full flex-shrink-0 cursor-pointer items-center justify-start gap-2 overflow-x-scroll px-2",
          className,
        )}
        style={{ backgroundColor }}
      >
        {categories.map((category) => (
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full border-2",
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
