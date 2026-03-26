"use client";
import { forwardRef, type ComponentProps } from "react";
import { classnames } from "../../utils";

export interface OptionComponentProps extends ComponentProps<"input"> {
  children?: React.ReactNode;
  hasFocus?: boolean;
}

export const Option = forwardRef<HTMLInputElement, OptionComponentProps>(
  (
    {
      multiple,
      children,
      className,
      hasFocus,
      id,
      ...inputProps
    },
    ref
  ) => {
    return (
      <label
        id={id}
        role="option"
        className={classnames(
          "text-left px-3 py-2 hover:bg-gray-100 has-checked:bg-primary-50 has-checked:hover:bg-primary-100 focus-within:bg-primary-50",
          {
            "bg-gray-100 has-checked:bg-primary-100": hasFocus,
          },
          className
        )}
      >
        <input
          className="hidden"
          ref={ref}
          type={multiple ? "checkbox" : "radio"}
          {...inputProps}
        />
        {children}
      </label>
    );
  }
);
