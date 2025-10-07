import { cva } from "class-variance-authority";
import { themeVariants } from "../../class-variants/theme";

export const spinnerClassVariants = cva(
  "animate-spin rounded-full border-t-transparent aspect-square w-auto h-full absolute border-(--theme-500)",
  {
    variants: {
      height: {
        sm: "border-1",
        md: "border-2",
        lg: "border-3",
      },
      theme: themeVariants,
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
