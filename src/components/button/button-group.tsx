import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { classnames } from "../../utils";

export interface ButtonGroupProps extends ComponentProps<"div"> {}

export const Group = forwardRef(
  (
    { className, children, ...divProps }: ButtonGroupProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        role="group"
        ref={ref}
        className={classnames(
          "flex *:not-last:rounded-r-none *:not-first:rounded-l-none",
          className
        )}
        {...divProps}
      >
        {children}
      </div>
    );
  }
);
