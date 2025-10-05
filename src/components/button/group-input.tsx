import {
  forwardRef,
  type ComponentProps,
  type ForwardedRef,
  type ReactNode,
} from "react";
import type { ButtonStyles } from "./types";
import { buttonClassVariants } from "./class-variants";
import { classnames } from "../../utils";
import { twMerge } from "tw-merge";

interface GroupInputProps
  extends Omit<ComponentProps<"input">, "height">,
    ButtonStyles {
  children?: ReactNode;
}

export const Input = forwardRef(
  (
    {
      className,
      height,
      theme,
      multiple,
      children,
      ...inputProps
    }: GroupInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label
        className={twMerge(
          buttonClassVariants({
            height,
            theme,
            className: classnames(
              "flex items-center justify-center",
              className
            ),
          })
        )}
      >
        {children}
        <input
          ref={ref}
          type={multiple ? "checkbox" : "radio"}
          className="invisible"
          {...inputProps}
        />
      </label>
    );
  }
);
