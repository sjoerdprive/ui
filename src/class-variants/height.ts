import { cva } from "class-variance-authority";
import type { Height } from "../config";

export const heightVariants: Record<Height, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

export const heightClassVariants = cva("", {
  variants: {
    height: heightVariants,
  },
});
