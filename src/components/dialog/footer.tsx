"use client";
import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Footer = ({
  children,
  className,
  ...footerProps
}: ComponentProps<"footer">) => {
  return (
    <footer
      className={classnames(
        "px-5 py-2 border-t border-gray-200 bg-gray-50 flex gap-2 justify-end",
        className
      )}
      {...footerProps}
    >
      {children}
    </footer>
  );
};
