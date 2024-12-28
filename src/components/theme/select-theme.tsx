"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { useMenuTheme } from "../theme-context";
import { type FC } from "react";
import { cn } from "~/lib/utils";

const colorThemes = [
  {
    backgroundColor: "#F3F4F6",
    borderColor: "#A3BFFA",
    iconColor: "#2563EB",
    textColor: "#000000",
  },
  {
    backgroundColor: "#FFFAF1",
    borderColor: "#FBBF24",
    iconColor: "#F59E0B",
    textColor: "#374151",
  },
  {
    backgroundColor: "#F9FAFB",
    borderColor: "#D1D5DB",
    iconColor: "#6B7280",
    textColor: "#000000",
  },
  {
    backgroundColor: "#D1E7DD",
    borderColor: "#38B2AC",
    iconColor: "#2D3748",
    textColor: "#FFFFFF",
  },
  {
    backgroundColor: "#FECACA",
    borderColor: "#F87171",
    iconColor: "#DC2626",
    textColor: "#FFFFFF",
  },
  {
    backgroundColor: "#FFF5E1",
    borderColor: "#FFB84C",
    iconColor: "#FF8303",
    textColor: "#5F370E",
  },
  {
    backgroundColor: "#E3FCEF",
    borderColor: "#81E6D9",
    iconColor: "#319795",
    textColor: "#22543D",
  },
  {
    backgroundColor: "#EBF4FF",
    borderColor: "#63B3ED",
    iconColor: "#3182CE",
    textColor: "#2C5282",
  },
  {
    backgroundColor: "#FEE2E2",
    borderColor: "#FC8181",
    iconColor: "#E53E3E",
    textColor: "#742A2A",
  },
  {
    backgroundColor: "#EDE9FE",
    borderColor: "#B794F4",
    iconColor: "#6B46C1",
    textColor: "#44337A",
  },
];
interface ThemeSelectorProps {
  className?: string;
}
export const MenuThemeSelector: FC<ThemeSelectorProps> = ({ className }) => {
  const { setTheme, theme } = useMenuTheme();

  return (
    theme.borderColor &&
    theme.backgroundColor && (
      <div className={cn("flex items-center gap-4 rounded-2xl", className)}>
        <p>Boje:</p>
        <Select
          onValueChange={(value: string) => {
            setTheme({ ...theme, ...colorThemes[Number(value)]! });
          }}
        >
          <SelectTrigger
            className={cn("rounded-xl focus:ring-0")}
            style={{
              borderColor: theme.borderColor,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {colorThemes.map((theme, index) => (
              <SelectItem key={index} value={index.toString()}>
                <div className="flex gap-2">
                  {Object.entries(theme).map(([key, value]) => {
                    if (key.toLowerCase().includes("color")) {
                      return (
                        <div
                          key={key}
                          className="h-7 w-7 rounded-full border-2"
                          style={{ backgroundColor: value }}
                        />
                      );
                    }
                  })}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  );
};
