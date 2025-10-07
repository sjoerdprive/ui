import { cva } from "class-variance-authority";

export const spinnerClassVariants = cva(
  "animate-spin rounded-full border-t-transparent aspect-square w-auto h-full absolute",
  {
    variants: {
      height: {
        sm: "border-1",
        md: "border-2",
        lg: "border-3",
      },
      theme: {
        primary: "border-primary-500",
        secondary: "border-secondary-500",
        accent: "border-accent-500",
      },
    },
  }
);

export const spinnerContainerClass = cva("relative aspect-square", {
  variants: {
    height: {
      sm: "h-4",
      md: "h-5",
      lg: "h-6",
    },
  },
});
