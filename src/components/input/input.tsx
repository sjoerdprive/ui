import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { inputClassVariants } from "./class-variants";
import type { InputStyles } from "./types";
import { twMerge } from "tw-merge";

interface InputProps
  extends Omit<ComponentProps<"input">, "height">,
    InputStyles {}

export const Input = forwardRef(
  (
    { className, height, ...inputProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        className={twMerge(inputClassVariants({ height, className }))}
        {...inputProps}
      />
    );
  }
);
