import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants/height";
import { classnames } from "../../utils";
import { themeVariants } from "../../class-variants/theme";

export const buttonClassVariants = cva(
  [
    "rounded-md not-disabled:cursor-pointer flex items-center has-disabled:cursor-default",
    "focus:outline-2 focus-within:outline-2 not-disabled:hover:bg-(--theme-600,var(--color-gray-100)) has-disabled:!bg-(--color-input-disabled-bg) bg-(--theme-500) active:bg-(--theme-600) disabled:bg-(--color-input-disabled-bg) disabled:text-(--color-input-disabled-text) has-disabled:text-(--color-input-disabled-text) has-checked:bg-(--theme-600) has-checked:inset-shadow-sm inset-shadow-(color:--theme-700) outline-(--theme-700)",
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
        md: classnames(heightVariants.md, "px-3 gap-3"),
        lg: classnames(heightVariants.lg, "px-4 gap-4"),
      },
      square: {
        true: "aspect-square p-0 w-auto overflow-hidden justify-center",
      },
    },
    defaultVariants: {
      height: "md",
    },
  }
);
