"use client";
import { forwardRef, type ComponentProps } from "react";
import { inputClassVariants } from "./class-variants";
import type { InputStyles } from "./types";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends Omit<ComponentProps<"input">, "height">,
    InputStyles {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, height, ...inputProps }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(inputClassVariants({ height, className }))}
        {...inputProps}
      />
    );
  }
);
