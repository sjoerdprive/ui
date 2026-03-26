"use client";
import { type ComponentProps, type Ref } from "react";
import { buttonClassVariants } from "./class-variants";
import type { ButtonStyles } from "./types";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../spinner/spinner";

export interface ButtonProps extends ComponentProps<"button">, ButtonStyles {
  isPending?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

export const Button = ({
  className,
  children,
  height,
  theme,
  square,
  variant,
  isPending,
  onClick,
  ref,
  ...buttonProps
}: ButtonProps) => {
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
};
