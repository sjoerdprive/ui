import { cva } from "class-variance-authority";
import type { Height } from "../config";

export const heightVariants: Record<Height, string> = {
  xs: "h-6 min-h-6 text-xs",
  sm: "h-8 min-h-8 text-sm",
  md: "h-10 min-h-10",
  lg: "h-12 min-h-12",
};

export const heightClassVariants = cva("", {
  variants: {
    height: heightVariants,
  },
});
