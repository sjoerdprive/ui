"use client";
import { type ComponentProps, type Ref } from "react";
import { inputClassVariants } from "./class-variants";
import type { InputStyles } from "./types";
import { classnames } from "../../utils";
import { twMerge } from "tailwind-merge";

export interface InputGroupProps extends ComponentProps<"label">, InputStyles {
  ref?: Ref<HTMLLabelElement>;
}

export const Group = ({ children, className, height, ref, ...inputProps }: InputGroupProps) => {
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
};
