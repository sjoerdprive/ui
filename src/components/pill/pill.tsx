"use client";
import { type ComponentProps, type Ref } from "react";
import type { ButtonStyles } from "../button/types";
import { pillClassVariants } from "./class-variants";

export interface PillProps extends ComponentProps<"span">, ButtonStyles {
  ref?: Ref<HTMLSpanElement>;
}

export const Pill = ({
  children,
  className,
  height,
  theme,
  square,
  variant,
  ref,
  ...spanProps
}: PillProps) => {
  return (
    <span
      ref={ref}
      className={pillClassVariants({
        theme,
        variant,
        square,
        height,
        className,
      })}
      {...spanProps}
    >
      {children}
    </span>
  );
};
