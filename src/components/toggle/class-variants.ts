import { cva } from "class-variance-authority";
import { inputBorderClass } from "../input/class-variants";
import { themeVariants } from "../../class-variants/theme";

export const toggleClassVariants = cva(
  [
    inputBorderClass,
    "w-auto aspect-video rounded-full bg-gray-300 has-checked:bg-(--theme-500) relative transition-colors",
  ],
  {
    variants: {
      height: {
        sm: "h-5 p-px",
        md: "h-6 p-0.5",
        lg: "h-7 p-1",
      },
      theme: themeVariants,
    },
    defaultVariants: {
      height: "md",
      theme: "primary",
    },
  }
);
