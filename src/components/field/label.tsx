"use client";
import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Label = ({
  children,
  className,
  ...labelProps
}: ComponentProps<"label">) => {
  return (
    <label className={classnames("font-semibold text-sm", className)} {...labelProps}>
      {children}
    </label>
  );
};
