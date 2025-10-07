import { cva } from "class-variance-authority";
import { heightVariants } from "../../class-variants/height";
import { classnames } from "../../utils";

export const buttonClassVariants = cva(
  "px-4 rounded-md not-disabled:cursor-pointer not-disabled:hover:bg-(--bg-btn-hover) has-disabled:!bg-(--color-input-disabled-bg) text-(--text-btn) bg-(--bg-btn) flex items-center [--bg-btn-hover:var(--color-gray-100)] active:bg-(--bg-btn-active) disabled:bg-(--color-input-disabled-bg) disabled:text-(--color-input-disabled-text) has-disabled:bg-(--color-input-disabled-bg) has-disabled:text-(--color-input-disabled-text) has-disabled:cursor-default has-checked:bg-(--bg-btn-active) outline-(--outline-btn)",
  {
    variants: {
      theme: {
        primary:
          "[--bg-btn:var(--color-primary-500)] [--bg-btn-hover:var(--color-primary-400)] [--bg-btn-active:var(--color-primary-600)] text-white [--outline-btn:var(--color-accent-900)]",
        secondary:
          "[--bg-btn:var(--color-secondary-500)] [--bg-btn-hover:var(--color-secondary-400)] [--bg-btn-active:var(--color-secondary-600)] text-white [--outline-btn:var(--color-secondary-900)]",
        accent:
          "[--bg-btn:var(--color-accent-500)] [--bg-btn-hover:var(--color-accent-400)] [--bg-btn-active:var(--color-accent-600)] text-white [--outline-btn:var(--color-accent-900)]",
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
