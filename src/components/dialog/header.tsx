"use client";
import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Header = ({
  children,
  className,
  ...headerProps
}: ComponentProps<"header">) => {
  return (
    <header
      className={classnames("px-5 py-4 flex gap-2 items-center", className)}
      {...headerProps}
    >
      {children}
    </header>
  );
};
