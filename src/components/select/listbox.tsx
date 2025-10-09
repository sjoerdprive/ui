import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { classnames } from "../../utils";

interface ListboxProps extends ComponentProps<"ul"> {}

export const Listbox = forwardRef(
  (
    { className, children, ...ulProps }: ListboxProps,
    ref: ForwardedRef<HTMLUListElement>
  ) => {
    return (
      <ul
        ref={ref}
        role="listbox"
        tabIndex={-1}
        className={classnames("w-full flex flex-col outline-0", className)}
        {...ulProps}
      >
        {children}
      </ul>
    );
  }
);
