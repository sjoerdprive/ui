"use client";
import { forwardRef, type ComponentProps } from "react";
import { inputClassVariants } from "./class-variants";
import type { InputStyles } from "./types";
import { classnames } from "../../utils";
import { twMerge } from "tailwind-merge";

export interface InputGroupProps extends ComponentProps<"label">, InputStyles {}

export const Group = forwardRef<HTMLLabelElement, InputGroupProps>(
  ({ children, className, height, ...inputProps }, ref) => {
    return (
      <label
        ref={ref}
        role="group"
        className={twMerge(
          inputClassVariants({
            height,
            className: classnames("flex px-0 *:outline-0", className),
          })
        )}
        {...inputProps}
      >
        {children}
      </label>
    );
  }
);
