import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants/height";

export const buttonClassVariants = cva("px-6 rounded", {
  variants: {
    theme: {
      primary:
        "bg-primary-500 hover:bg-primary-400 text-white cursor-pointer active:bg-primary-600 has-checked:bg-primary-600",
      secondary:
        "bg-secondary-500 hover:bg-secondary-400 text-white cursor-pointer active:bg-secondary-600 has-checked:bg-secondary-600",
    },
    height: heightVariants,
  },
  defaultVariants: {
    height: "md",
  },
});
