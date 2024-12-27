"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "~/lib/utils";
import { type MenuTheme } from "~/server/db/schema";

interface MenuThemeContextType {
  theme: MenuTheme;
  setTheme: (theme: MenuTheme) => void;
}

const MenuThemeContext = createContext<MenuThemeContextType | undefined>(
  undefined,
);

export const MenuThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme: MenuTheme;
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState(initialTheme);
  const { backgroundColor, textColor } = theme;

  return (
    <MenuThemeContext.Provider value={{ theme, setTheme }}>
      {backgroundColor && textColor && (
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-between gap-4 overflow-hidden bg-transparent p-4",
          )}
          style={{ backgroundColor, color: textColor }}
        >
          {children}
        </div>
      )}
    </MenuThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useMenuTheme = (): MenuThemeContextType => {
  const context = useContext(MenuThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
