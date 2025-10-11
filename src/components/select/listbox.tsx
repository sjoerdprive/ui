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
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === " ") {
            e.preventDefault();
          }
        }}
        ref={ref}
        role="listbox"
        tabIndex={-1}
        className={classnames("outline-0 overflow-y-scroll", className)}
        {...ulProps}
      >
        <div className="flex flex-col h-fit">{children}</div>
      </ul>
    );
  }
);
