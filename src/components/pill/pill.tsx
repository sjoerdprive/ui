"use client";
import { forwardRef, type ComponentProps } from "react";
import type { ButtonStyles } from "../button/types";
import { pillClassVariants } from "./class-variants";

export interface PillProps extends ComponentProps<"span">, ButtonStyles {}

export const Pill = forwardRef<HTMLSpanElement, PillProps>(
  (
    {
      children,
      className,
      height,
      theme,
      square,
      variant,
      ...spanProps
    },
    ref
  ) => {
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
  }
);
