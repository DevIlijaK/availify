"use client";

import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

import { useMenuTheme } from "../theme-context";
import { type FC } from "react";
import { cn } from "~/lib/utils";

const colorThemes = [
  {
    // Modern Dark
    backgroundColor: "#1A1A1A",
    borderColor: "#333333",
    iconColor: "#FFD700", // Gold
    textColor: "#FFFFFF",
    textForeground: "#FFFFFF",
    textMutedForeground: "#A0A0A0",
    productCartBackgroundColor: "#222222",
    cartLayout: "default",
  },
  {
    // Light Minimal
    backgroundColor: "#FFFFFF",
    borderColor: "#E5E7EB",
    iconColor: "#3B82F6", // Blue
    textColor: "#111827",
    textForeground: "#111827",
    textMutedForeground: "#6B7280",
    productCartBackgroundColor: "#F9FAFB",
  },
  {
    // Forest Green
    backgroundColor: "#F0FFF4",
    borderColor: "#48BB78",
    iconColor: "#2F855A",
    textColor: "#1A4731",
    textForeground: "#1A4731",
    textMutedForeground: "#276749",
    productCartBackgroundColor: "#E6FFEC",
  },
  {
    // Ocean Blue
    backgroundColor: "#EBF8FF",
    borderColor: "#4299E1",
    iconColor: "#2B6CB0",
    textColor: "#2A4365",
    textForeground: "#2A4365",
    textMutedForeground: "#2C5282",
    productCartBackgroundColor: "#E2F4FF",
  },
  {
    // Warm Sunset
    backgroundColor: "#FFFAF0",
    borderColor: "#ED8936",
    iconColor: "#C05621",
    textColor: "#7B341E",
    textForeground: "#7B341E",
    textMutedForeground: "#9C4221",
    productCartBackgroundColor: "#FFF5EB",
  },
  {
    // Royal Purple
    backgroundColor: "#FAF5FF",
    borderColor: "#805AD5",
    iconColor: "#6B46C1",
    textColor: "#44337A",
    textForeground: "#44337A",
    textMutedForeground: "#553C9A",
    productCartBackgroundColor: "#F5EBFF",
  },
  {
    // Cherry Red
    backgroundColor: "#FFF5F5",
    borderColor: "#F56565",
    iconColor: "#C53030",
    textColor: "#742A2A",
    textForeground: "#742A2A",
    textMutedForeground: "#9B2C2C",
    productCartBackgroundColor: "#FFE9E9",
  },
  {
    // Mint Fresh
    backgroundColor: "#F0FFF4",
    borderColor: "#38B2AC",
    iconColor: "#2C7A7B",
    textColor: "#234E52",
    textForeground: "#234E52",
    textMutedForeground: "#285E61",
    productCartBackgroundColor: "#E6FFEA",
  },
  {
    // Coffee Brown
    backgroundColor: "#FFFBEB",
    borderColor: "#B7791F",
    iconColor: "#975A16",
    textColor: "#633112",
    textForeground: "#633112",
    textMutedForeground: "#7B341E",
    productCartBackgroundColor: "#FFF7E6",
  },
  {
    // Slate Gray
    backgroundColor: "#F8FAFC",
    borderColor: "#64748B",
    iconColor: "#475569",
    textColor: "#1E293B",
    textForeground: "#1E293B",
    textMutedForeground: "#334155",
    productCartBackgroundColor: "#F1F5F9",
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
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-2xl px-2",
          className,
        )}
      >
        <div className="flex w-full items-center gap-4">
          <p className="min-w-[50px]">Boje:</p>
          <Select
            onValueChange={(value: string) => {
              setTheme({ ...theme, ...colorThemes[Number(value)]! });
            }}
          >
            <SelectTrigger
              className={cn("focus:ring-0")}
              style={{
                borderColor: theme.borderColor,
                backgroundColor: theme.backgroundColor,
              }}
            >
              <div className="flex gap-2">
                {Object.entries(theme).map(([key, value]) => {
                  if (key.toLowerCase().includes("color")) {
                    return (
                      <div
                        key={key}
                        className="h-7 w-7 rounded-full border-2"
                        style={{ backgroundColor: value as string }}
                      />
                    );
                  }
                  return null;
                })}
              </div>
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

        <div className="flex w-full items-center justify-start gap-4 text-foreground">
          <p className="min-w-[50px]">Layout:</p>
          <Select
            value={theme.cartLayout}
            onValueChange={(
              value:
                | "default"
                | "card"
                | "compact"
                | "modern"
                | "minimal"
                | "featured",
            ) => {
              setTheme({ ...theme, cartLayout: value });
            }}
          >
            <SelectTrigger
              className="w-full"
              style={{
                borderColor: theme.borderColor,
                backgroundColor: theme.backgroundColor,
                color: theme.textColor!,
              }}
            >
              {theme.cartLayout}
            </SelectTrigger>
            <SelectContent
              style={{
                backgroundColor: theme.backgroundColor,
              }}
            >
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full items-center justify-start gap-4 text-foreground">
          <p className="min-w-[50px]">Grid:</p>
          <Select
            value={theme.gridLayout}
            onValueChange={(value: "list" | "grid" | "compact") => {
              setTheme({ ...theme, gridLayout: value });
            }}
          >
            <SelectTrigger
              className="w-full"
              style={{
                borderColor: theme.borderColor,
                backgroundColor: theme.backgroundColor,
                color: theme.textColor!,
              }}
            >
              {theme.gridLayout}
            </SelectTrigger>
            <SelectContent
              style={{
                backgroundColor: theme.backgroundColor,
              }}
            >
              <SelectItem value="list">List</SelectItem>
              <SelectItem value="grid">Grid</SelectItem>
              <SelectItem value="compact">Compact Grid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    )
  );
};
