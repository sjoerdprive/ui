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
        "px-4 py-2 border-t border-gray-200 bg-gray-100 flex gap-2 justify-end",
        className
      )}
      {...footerProps}
    >
      {children}
    </footer>
  );
};
