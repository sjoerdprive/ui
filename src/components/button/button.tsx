"use client";
import { forwardRef, type ComponentProps } from "react";
import { buttonClassVariants } from "./class-variants";
import type { ButtonStyles } from "./types";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../spinner/spinner";

export interface ButtonProps extends ComponentProps<"button">, ButtonStyles {
  isPending?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      height,
      theme,
      square,
      variant,
      isPending,
      onClick,
      ...buttonProps
    },
    ref
  ) => {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick?.(e);
        }}
        className={twMerge(
          buttonClassVariants({ theme, variant, height, className, square })
        )}
        {...buttonProps}
        ref={ref}
      >
        {children}
        {isPending && (
          <Spinner className="[--theme-500:currentColor]" height={height} />
        )}
      </button>
    );
  }
);
