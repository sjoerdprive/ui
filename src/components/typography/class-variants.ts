import { cva } from "class-variance-authority";

export const typographyClassVariants = cva("leading-none", {
  variants: {
    size: {
      p: "text-base",
      h1: "text-(length:--typography-h1-size) font-medium",
      h2: "text-(length:--typography-h2-size) font-medium",
      h3: "text-(length:--typography-h3-size) font-medium",
      h4: "text-(length:--typography-h4-size) font-medium",
      h5: "text-(length:--typography-h5-size) font-medium",
      h6: "text-(length:--typography-h6-size) font-medium",
    },
  },
});
