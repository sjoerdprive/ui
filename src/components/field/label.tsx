"use client";
import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Label = ({
  children,
  className,
  ...labelProps
}: ComponentProps<"label">) => {
  return (
    <label className={classnames("font-medium", className)} {...labelProps}>
      {children}
    </label>
  );
};
