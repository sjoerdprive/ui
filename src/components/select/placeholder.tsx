"use client";
import { type ComponentProps, type Ref } from "react";
import { classnames } from "../../utils";

export const Placeholder = ({ children, className, ref, ...spanProps }: ComponentProps<"span"> & { ref?: Ref<HTMLSpanElement> }) => {
  return (
    <span
      ref={ref}
      className={classnames("text-input-disabled-text truncate whitespace-nowrap overflow-hidden grow", className)}
      {...spanProps}
    >
      {children}
    </span>
  );
};
