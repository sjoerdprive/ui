import { cva } from "class-variance-authority";
import type { Theme } from "../config";

export const themeVariants: Record<Theme, string> = {
  primary:
    "[--theme-100:var(--color-primary-100)] [--theme-200:var(--color-primary-200)] [--theme-300:var(--color-primary-300)] [--theme-400:var(--color-primary-400)] [--theme-500:var(--color-primary-500)] [--theme-600:var(--color-primary-600)] [--theme-700:var(--color-primary-700)] [--theme-800:var(--color-primary-800)] [--theme-900:var(--color-primary-900)]",
  secondary:
    "[--theme-100:var(--color-secondary-100)] [--theme-200:var(--color-secondary-200)] [--theme-300:var(--color-secondary-300)] [--theme-400:var(--color-secondary-400)] [--theme-500:var(--color-secondary-500)] [--theme-600:var(--color-secondary-600)] [--theme-700:var(--color-secondary-700)] [--theme-800:var(--color-secondary-800)] [--theme-900:var(--color-secondary-900)]",
  accent:
    "[--theme-100:var(--color-accent-100)] [--theme-200:var(--color-accent-200)] [--theme-300:var(--color-accent-300)] [--theme-400:var(--color-accent-400)] [--theme-500:var(--color-accent-500)] [--theme-600:var(--color-accent-600)] [--theme-700:var(--color-accent-700)] [--theme-800:var(--color-accent-800)] [--theme-900:var(--color-accent-900)]",
};

export const themeClassVariants = cva("", {
  variants: {
    theme: themeVariants,
  },
});
