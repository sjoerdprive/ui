"use client";
import { type ComponentProps, type ReactNode, type Ref } from "react";
import { twMerge } from "tailwind-merge";
import { classnames } from "../../utils";
import { buttonClassVariants } from "./class-variants";
import type { ButtonStyles } from "./types";

export interface GroupInputProps
  extends Omit<ComponentProps<"input">, "height">, ButtonStyles {
  children?: ReactNode;
  ref?: Ref<HTMLInputElement>;
}

export const Input = ({
  className,
  height,
  theme,
  multiple,
  children,
  square,
  variant,
  ref,
  ...inputProps
}: GroupInputProps) => {
  return (
    <label
      className={twMerge(
        buttonClassVariants({
          variant,
          height,
          theme,
          square,
          className: classnames(
            "flex items-center justify-center",
            className,
          ),
        }),
      )}
    >
      {children}
      <input
        ref={ref}
        type={multiple ? "checkbox" : "radio"}
        className="sr-only"
        {...inputProps}
      />
    </label>
  );
};
