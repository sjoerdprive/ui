import { cva } from "class-variance-authority";
import { themeVariants } from "../../class-variants/theme";

export const spinnerClassVariants = cva(
  "animate-spin rounded-full border-t-transparent aspect-square w-auto h-full absolute border-(--theme-500)",
  {
    variants: {
      height: {
        xs: "border",
        sm: "border-2",
        md: "border-2",
        lg: "border-2",
      },
      theme: themeVariants,
    },
    defaultVariants: {
      height: "md",
    },
  }
);

export const spinnerContainerClass = cva("relative aspect-square", {
  variants: {
    height: {
      xs: "h-2",
      sm: "h-3",
      md: "h-4",
      lg: "h-5",
    },
  },
  defaultVariants: {
    height: "md",
  }
});
