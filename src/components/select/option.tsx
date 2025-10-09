import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { classnames } from "../../utils";

interface OptionComponentProps extends ComponentProps<"input"> {
  children?: React.ReactNode;
}

export const Option = forwardRef(
  (
    { multiple, children, className, ...inputProps }: OptionComponentProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label
        role="option"
        className={classnames(
          "text-left px-3 py-1 hover:bg-gray-200 has-checked:bg-primary-100",
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
