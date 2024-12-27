"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { type MenuTheme } from "~/server/db/schema";

import { v4 as uuidv4 } from "uuid";
import { useMenuTheme } from "../theme-context";

interface MenuTheme {
  id: string;
  name: string;
  backgroundColor: string | null;
  textColor: string | null;
  iconColor: string | null;
  borderColor: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

const colorThemes: MenuTheme[] = [
  {
    id: uuidv4(),
    name: "Theme 1",
    backgroundColor: "#F3F4F6",
    borderColor: "#A3BFFA",
    iconColor: "#2563EB",
    textColor: "#000000",
    createdAt: new Date(),
    updatedAt: null, // You can update this later
  },
  {
    id: uuidv4(),
    name: "Theme 2",
    backgroundColor: "#FFFAF1",
    borderColor: "#FBBF24",
    iconColor: "#F59E0B",
    textColor: "#374151",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 3",
    backgroundColor: "#F9FAFB",
    borderColor: "#D1D5DB",
    iconColor: "#6B7280",
    textColor: "#000000",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 4",
    backgroundColor: "#D1E7DD",
    borderColor: "#38B2AC",
    iconColor: "#2D3748",
    textColor: "#FFFFFF",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 5",
    backgroundColor: "#FECACA",
    borderColor: "#F87171",
    iconColor: "#DC2626",
    textColor: "#FFFFFF",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 6",
    backgroundColor: "#FFF5E1",
    borderColor: "#FFB84C",
    iconColor: "#FF8303",
    textColor: "#5F370E",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 7",
    backgroundColor: "#E3FCEF",
    borderColor: "#81E6D9",
    iconColor: "#319795",
    textColor: "#22543D",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 8",
    backgroundColor: "#EBF4FF",
    borderColor: "#63B3ED",
    iconColor: "#3182CE",
    textColor: "#2C5282",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 9",
    backgroundColor: "#FEE2E2",
    borderColor: "#FC8181",
    iconColor: "#E53E3E",
    textColor: "#742A2A",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: uuidv4(),
    name: "Theme 10",
    backgroundColor: "#EDE9FE",
    borderColor: "#B794F4",
    iconColor: "#6B46C1",
    textColor: "#44337A",
    createdAt: new Date(),
    updatedAt: null,
  },
];

export const MenuThemeSelector = () => {
  const { setTheme } = useMenuTheme();

  return (
    <div className="flex flex-col gap-4">
      <Select
        onValueChange={(value: string) => {
          setTheme(colorThemes[Number(value)]!);
        }}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {colorThemes.map((theme, index) => (
            <SelectItem key={theme.id} value={index.toString()}>
              {theme.id}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
