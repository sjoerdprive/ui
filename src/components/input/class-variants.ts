import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants/height";

export const inputBorderClass =
  "border border-gray-300 focus:outline-2 outline-accent-500 focus-within:outline-2 has-aria-invalid:outline-red-500 aria-invalid:outline-red-500 aria-invalid:outline-2 aria-expanded:outline-2";

export const inputClassVariants = cva(
  [
    "px-3 bg-white rounded-md disabled:cursor-not-allowed disabled:text-input-disabled-text disabled:bg-input-disabled-bg has-disabled:cursor-not-allowed has-disabled:text-input-disabled-text has-disabled:bg-input-disabled-bg flex flex-nowrap items-center justify-start",
    inputBorderClass,
  ],
  {
    variants: {
      height: heightVariants,
    },
    defaultVariants: {
      height: "md",
    },
  }
);
