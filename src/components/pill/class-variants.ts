import { cva } from "class-variance-authority";
import { heightVariants, themeVariants } from "../../class-variants";
import { classnames } from "../../utils";

export const pillClassVariants = cva("rounded flex items-center w-fit cursor-default whitespace-nowrap", {
  variants: {
    theme: {
      primary: classnames(themeVariants.primary, "text-white"),
      secondary: classnames(themeVariants.secondary, "text-white"),
      accent: classnames(themeVariants.accent, "text-black"),
    },
    height: {
      xs: classnames(heightVariants.xs, "text-xs px-2 gap-1"),
      sm: classnames(heightVariants.sm, "text-sm px-2 gap-2"),
      md: classnames(heightVariants.md, "px-3 gap-3"),
      lg: classnames(heightVariants.lg, "px-4 gap-4"),
    },
    variant: {
      solid: "bg-(--theme-500)",
      border: "border border-(--theme-500) !text-(--theme-700)",
    },
    square: {
      true: "aspect-square p-0 w-auto overflow-hidden justify-center",
    },
  },
  defaultVariants: {
    theme: "primary",
    variant: "solid",
    height: "md",
  },
});
