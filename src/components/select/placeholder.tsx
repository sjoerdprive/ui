"use client";
import { forwardRef, type ComponentProps } from "react";
import { classnames } from "../../utils";

export const Placeholder = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
  ({ children, className, ...spanProps }, ref) => {
    return (
      <span
        ref={ref}
        className={classnames("text-input-disabled-text truncate whitespace-nowrap overflow-hidden grow", className)}
        {...spanProps}
      >
        {children}
      </span>
    );
  }
);
