import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export enum DaysOfWeek {
  MONDAY = "Ponedeljak",
  TUESDAY = "Utorak",
  WEDNESDAY = "Sreda",
  THURSDAY = "Četvrtak",
  FRIDAY = "Petak",
  SATURDAY = "Subota",
  SUNDAY = "Nedelja",
}
