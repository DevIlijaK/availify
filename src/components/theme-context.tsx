"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { cn } from "~/lib/utils";
import { type MenuTheme } from "~/server/db/schema";
import { updateMenuTheme } from "~/server/queries";

interface MenuThemeContextType {
  theme: MenuTheme;
  setTheme: (theme: MenuTheme) => void;
  isDirty: boolean;
  saveTheme: () => Promise<void>;
  resetTheme: () => void;
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
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const hasChanges = JSON.stringify(theme) !== JSON.stringify(initialTheme);
    setIsDirty(hasChanges);
  }, [theme, initialTheme]);

  const saveTheme = async () => {
    await updateMenuTheme(theme);
  };

  const resetTheme = () => setTheme(initialTheme);

  return (
    theme.backgroundColor &&
    theme.textColor && (
      <MenuThemeContext.Provider
        value={{ theme, setTheme, isDirty, saveTheme, resetTheme }}
      >
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-between gap-4 bg-transparent px-4",
          )}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
        >
          {children}
        </div>
      </MenuThemeContext.Provider>
    )
  );
};

// Custom hook
export const useMenuTheme = (): MenuThemeContextType => {
  const context = useContext(MenuThemeContext);
  if (!context) {
    throw new Error("useMenuTheme must be used within a MenuThemeProvider");
  }
  return context;
};
