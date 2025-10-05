import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants/height";

export const buttonClassVariants = cva("px-6 rounded", {
  variants: {
    theme: {
      primary:
        "bg-primary-500 hover:bg-primary-600 text-white cursor-pointer active:bg-primary-400 has-checked:bg-primary-400",
      secondary:
        "bg-secondary-500 hover:bg-secondary-600 text-white cursor-pointer active:bg-secondary-400 has-checked:bg-secondary-400",
    },
    height: heightVariants,
  },
  defaultVariants: {
    height: "md",
  },
});
