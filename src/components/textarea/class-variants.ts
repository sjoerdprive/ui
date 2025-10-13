import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants";
import { classnames } from "../../utils";
import { inputBorderClass } from "../input/class-variants";

export const textAreaClassVariants = cva(
  ["resize-none overflow-hidden px-3", inputBorderClass],
  {
    variants: {
      height: {
        xs: classnames(heightVariants.xs, "text-xs py-1"),
        sm: classnames(heightVariants.sm, "text-sm py-1.5"),
        md: classnames(heightVariants.md, "py-2"),
        lg: classnames(heightVariants.lg, "py-3"),
      },
    },
    defaultVariants: {
      height: "md",
    },
  }
);
