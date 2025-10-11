import { cva } from "class-variance-authority";
import { heightVariants, themeVariants } from "../../class-variants";
import { classnames } from "../../utils";

export const buttonClassVariants = cva(
  [
    "rounded-md not-disabled:cursor-pointer flex items-center has-disabled:cursor-default",
    "focus:outline-2 focus-within:outline-2  has-disabled:!bg-(--color-input-disabled-bg) disabled:bg-(--color-input-disabled-bg) disabled:text-(--color-input-disabled-text) has-disabled:text-(--color-input-disabled-text) outline-(--theme-700)",
  ],
  {
    variants: {
      theme: {
        primary: classnames(themeVariants.primary, "text-white"),
        secondary: classnames(themeVariants.secondary, "text-white"),
        accent: classnames(themeVariants.accent, "text-black"),
      },
      height: {
        ...heightVariants,
        sm: classnames(heightVariants.sm, "text-sm px-2 gap-2"),
        md: classnames(heightVariants.md, "px-3 gap-2"),
        lg: classnames(heightVariants.lg, "px-4 gap-4"),
      },
      variant: {
        solid:
          "not-disabled:hover:bg-(--theme-600,var(--color-gray-100)) bg-(--theme-500) active:bg-(--theme-600) has-checked:bg-(--theme-600) has-checked:inset-shadow-sm inset-shadow-(color:--theme-700)",
        border:
          "not-disabled:hover:bg-(--theme-100) border border-(--theme-500) text-(--theme-700) active:bg-(--theme-200) has-checked:bg-(--theme-200)",
      },
      square: {
        true: "aspect-square p-0 w-auto overflow-hidden justify-center",
      },
    },
    defaultVariants: {
      height: "md",
      variant: "solid",
    },
  }
);
