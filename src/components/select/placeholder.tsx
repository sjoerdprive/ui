"use client";
import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { classnames } from "../../utils";

export const Placeholder = forwardRef(
  (
    { children, className, ...spanProps }: ComponentProps<"span">,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
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
