import { cva } from "class-variance-authority";
import { heightVariants, themeVariants } from "../../class-variants";
import { classnames } from "../../utils";

export const buttonClassVariants = cva(
  [
    "rounded-md not-disabled:cursor-pointer flex items-center has-disabled:cursor-default whitespace-nowrap",
    "focus:outline-2 focus-within:outline-2  has-disabled:!bg-(--color-input-disabled-bg) disabled:bg-(--color-input-disabled-bg)  disabled:text-(--color-input-disabled-text) has-disabled:text-(--color-input-disabled-text) outline-(--theme-700,black) text-inherit",
  ],
  {
    variants: {
      theme: themeVariants,
      height: {
        xs: classnames(heightVariants.xs, "px-2 gap-1"),
        sm: classnames(heightVariants.sm, "px-2 gap-2"),
        md: classnames(heightVariants.md, "px-3 gap-2"),
        lg: classnames(heightVariants.lg, "px-4 gap-4"),
      },
      variant: {
        solid:
          "not-disabled:hover:bg-(--theme-600,var(--color-gray-100)) bg-(--theme-500) active:bg-(--theme-600) has-checked:bg-(--theme-600) has-checked:inset-shadow-sm inset-shadow-(color:--theme-700) has-disabled:inset-shadow-(color:--color-input-disabled-text)",
        border:
          "not-disabled:hover:bg-(--theme-100) border border-(--theme-200) disabled:border-input-disabled-text has-disabled:border-input-disabled-text text-(--theme-500) active:bg-(--theme-200) has-checked:bg-(--theme-200)",
      },
      square: {
        true: "aspect-square p-0 w-auto overflow-hidden justify-center",
      },
    },
    defaultVariants: {
      height: "md",
      variant: "solid",
    },
    compoundVariants: [
      {
        variant: ["solid"],
        theme: ["primary"],
        className: "text-(--color-btn-primary-text,white)",
      },
      {
        variant: ["solid"],
        theme: ["secondary"],
        className: "text-(--color-btn-secondary-text,white)",
      },
      {
        variant: ["solid"],
        theme: ["accent"],
        className: "text-(--color-btn-accent-text,white)",
      },
    ],
  }
);
