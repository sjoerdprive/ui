import { cva } from "class-variance-authority";
import { themeVariants } from "../../class-variants/theme";

export const spinnerClassVariants = cva(
  "animate-spin rounded-full border-t-transparent aspect-square w-auto h-full absolute border-(--theme-500)",
  {
    variants: {
      height: {
        sm: "border-2",
        md: "border-2",
        lg: "border-2",
      },
      theme: themeVariants,
    },
  }
);

export const spinnerContainerClass = cva("relative aspect-square", {
  variants: {
    height: {
      sm: "h-3",
      md: "h-4",
      lg: "h-5",
    },
  },
});
