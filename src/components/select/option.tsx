"use client";
import { type ComponentProps, type Ref } from "react";
import { classnames } from "../../utils";

export interface OptionComponentProps extends ComponentProps<"input"> {
  children?: React.ReactNode;
  hasFocus?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export const Option = ({
  multiple,
  children,
  className,
  hasFocus,
  id,
  ref,
  ...inputProps
}: OptionComponentProps) => {
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
};
