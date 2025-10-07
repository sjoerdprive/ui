import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants/height";
import { classnames } from "../../utils";

export const buttonClassVariants = cva(
  "px-4 rounded not-disabled:cursor-pointer not-disabled:hover:bg-gray-100 flex items-center ",
  {
    variants: {
      theme: {
        primary:
          "bg-primary-500 not-disabled:hover:bg-primary-400 text-white active:bg-primary-600 has-checked:bg-primary-600",
        secondary:
          "bg-secondary-500 not-disabled:hover:bg-secondary-400 text-white active:bg-secondary-600 has-checked:bg-secondary-600",
      },
      height: {
        ...heightVariants,
        sm: classnames(heightVariants.sm, "text-sm"),
      },
      square: {
        true: "aspect-square p-0 w-auto overflow-hidden justify-center",
        false: "",
      },
    },
    defaultVariants: {
      height: "md",
    },
  }
);
