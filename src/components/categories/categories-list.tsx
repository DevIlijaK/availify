"use client";
import { type FC } from "react";
import { type ProductCategory } from "~/server/db/schema";
import { useMenuTheme } from "../theme-context";
import { cn } from "~/lib/utils";
import { Icon, type IconName } from "../icon";

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
          "sticky top-0 z-10 flex w-full flex-shrink-0 cursor-pointer items-center justify-start gap-2 overflow-x-scroll px-2",
          className,
        )}
        style={{ backgroundColor }}
      >
        {categories.map((category) => {
          console.log({ category });
          return (
            <div
              className={cn(
                "flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2",
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
          );
        })}
      </div>
    )
  );
};
