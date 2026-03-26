"use client";
import { type ComponentProps, type Ref } from "react";
import { inputClassVariants } from "./class-variants";
import type { InputStyles } from "./types";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends Omit<ComponentProps<"input">, "height">,
    InputStyles {
  ref?: Ref<HTMLInputElement>;
}

export const Input = ({ className, height, ref, ...inputProps }: InputProps) => {
  return (
    <input
      ref={ref}
      className={twMerge(inputClassVariants({ height, className }))}
      {...inputProps}
    />
  );
};
