import { createElement, type ComponentProps } from "react";
import type { TypographyOption } from "./types";
import { typographyClassVariants } from "./class-variants";

interface TypographyProps extends Omit<ComponentProps<"p">, "as"> {
  as?: TypographyOption;
  size?: TypographyOption;
}

export const Typography = ({
  as = "p",
  size,
  children,
  className,
  ...pProps
}: TypographyProps) => {
  return createElement(
    as,
    {
      className: typographyClassVariants({ size: size || as, className }),
      ...pProps,
    },
    children
  );
};
