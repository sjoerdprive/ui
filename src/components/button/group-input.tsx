"use client";
import { forwardRef, type ComponentProps, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { classnames } from "../../utils";
import { buttonClassVariants } from "./class-variants";
import type { ButtonStyles } from "./types";

export interface GroupInputProps
  extends Omit<ComponentProps<"input">, "height">, ButtonStyles {
  children?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, GroupInputProps>(
  (
    {
      className,
      height,
      theme,
      multiple,
      children,
      square,
      variant,
      ...inputProps
    },
    ref,
  ) => {
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
  },
);
