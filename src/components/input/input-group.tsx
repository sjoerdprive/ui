import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { inputClassVariants } from "./class-variants";
import type { InputStyles } from "./types";
import { classnames } from "../../utils";
import { twMerge } from "tailwind-merge";

interface InputGroupProps extends ComponentProps<"label">, InputStyles {}

export const Group = forwardRef(
  (
    { children, className, height, ...inputProps }: InputGroupProps,
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
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
