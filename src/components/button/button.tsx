import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { buttonClassVariants } from "./class-variants";
import type { ButtonStyles } from "./types";
import { twMerge } from "tw-merge";

interface ButtonProps extends ComponentProps<"button">, ButtonStyles {}

export const Button = forwardRef(
  (
    { className, children, height, theme, ...buttonProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={twMerge(buttonClassVariants({ theme, height, className }))}
        {...buttonProps}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
