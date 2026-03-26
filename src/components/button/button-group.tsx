"use client";
import { forwardRef, type ComponentProps } from "react";
import { classnames } from "../../utils";

export interface ButtonGroupProps extends ComponentProps<"div"> {}

export const Group = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, children, ...divProps }, ref) => {
    return (
      <div
        role="group"
        ref={ref}
        className={classnames(
          "flex *:not-last:rounded-r-none *:not-first:rounded-l-none w-fit",
          className
        )}
        {...divProps}
      >
        {children}
      </div>
    );
  }
);
