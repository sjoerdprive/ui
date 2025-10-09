import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { Popper } from "../popper";
import type { PopperProps } from "../popper/types";
import { useWidth } from "../../hooks/use-width";
import { classnames } from "../../utils";

interface ListboxProps extends ComponentProps<"ul">, PopperProps {}

export const Listbox = forwardRef(
  (
    { className, isVisible, anchor, children, ...ulProps }: ListboxProps,
    ref: ForwardedRef<HTMLUListElement>
  ) => {
    const width = useWidth(anchor);

    return (
      <Popper anchor={anchor} isVisible={isVisible}>
        <ul
          ref={ref}
          role="listbox"
          className={classnames(
            "flex flex-col shadow-lg rounded border border-gray-100 bg-white",
            className
          )}
          style={
            {
              width,
            } as React.CSSProperties
          }
          {...ulProps}
        >
          {children}
        </ul>
      </Popper>
    );
  }
);
