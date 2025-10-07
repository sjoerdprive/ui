import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function classnames(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
