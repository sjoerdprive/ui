import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import type { ButtonStyles } from "../button/types";
import { pillClassVariants } from "./class-variants";

interface PillProps extends ComponentProps<"span">, ButtonStyles {}

export const Pill = forwardRef(
  (
    {
      children,
      className,
      height,
      theme,
      square,
      variant,
      ...spanProps
    }: PillProps,
    ref: ForwardedRef<HTMLSpanElement>
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
