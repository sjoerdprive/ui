import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { buttonClassVariants } from "./class-variants";
import type { ButtonStyles } from "./types";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../spinner/spinner";

interface ButtonProps extends ComponentProps<"button">, ButtonStyles {
  isPending?: boolean;
}

export const Button = forwardRef(
  (
    {
      className,
      children,
      height,
      theme,
      square,
      isPending,
      ...buttonProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={twMerge(
          buttonClassVariants({ theme, height, className, square })
        )}
        {...buttonProps}
        ref={ref}
      >
        {isPending && (
          <Spinner className="[--theme-500:currentColor]" height={height}></Spinner>
        )}
        {children}
      </button>
    );
  }
);
