import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants/height";

export const inputClassVariants = cva(
  "px-3 border bg-white border-gray-300 rounded focus:outline outline-primary-500 focus-within:outline has-[aria-invalid]:outline-red-500 disabled:cursor-not-allowed disabled:text-input-disabled-text disabled:bg-input-disabled-bg has-disabled:cursor-not-allowed has-disabled:text-input-disabled-text has-disabled:bg-input-disabled-bg flex flex-nowrap items-center justify-start [aria-expanded=true]:outline",
  {
    variants: {
      height: heightVariants,
    },
    defaultVariants: {
      height: "md",
    },
  }
);
