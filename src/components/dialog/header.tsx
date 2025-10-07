import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Header = ({
  children,
  className,
  ...headerProps
}: ComponentProps<"header">) => {
  return (
    <header
      className={classnames("px-4 py-3 flex gap-2 items-center", className)}
      {...headerProps}
    >
      {children}
    </header>
  );
};
