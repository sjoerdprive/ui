import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { Popper } from "../popper";
import type { PopperProps } from "../popper/types";
import { useWidth } from "../../hooks/use-width";
import { classnames } from "../../utils";

interface DropdownProps extends ComponentProps<"div">, PopperProps {}

export const Dropdown = forwardRef(
  (
    { className, isVisible, anchor, children, ...ulProps }: DropdownProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const width = useWidth(anchor);

    return (
      <Popper anchor={anchor} isVisible={isVisible}>
        <div
          ref={ref}
          className={classnames(
            "shadow-lg rounded border border-gray-200 bg-white",
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
        </div>
      </Popper>
    );
  }
);
