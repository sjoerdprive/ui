"use client";
import { createElement, type ComponentProps } from "react";
import { typographyOptions, type TypographyOption } from "./types";
import { typographyClassVariants } from "./class-variants";

export interface TypographyProps extends Omit<ComponentProps<"p">, "as"> {
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
    typographyOptions.find((t) => t === as) ?? "p",
    {
      className: typographyClassVariants({ size: size || as, className }),
      ...pProps,
    },
    children
  );
};
