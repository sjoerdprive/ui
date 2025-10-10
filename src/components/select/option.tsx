import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { classnames } from "../../utils";

interface OptionComponentProps extends ComponentProps<"input"> {
  children?: React.ReactNode;
  hasFocus?: boolean;
}

export const Option = forwardRef(
  (
    {
      multiple,
      children,
      className,
      hasFocus,
      id,
      ...inputProps
    }: OptionComponentProps,
    ref: ForwardedRef<HTMLInputElement>
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
          className="sr-only"
          ref={ref}
          type={multiple ? "checkbox" : "radio"}
          {...inputProps}
        />
        {children}
      </label>
    );
  }
);
