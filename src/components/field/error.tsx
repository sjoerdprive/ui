import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Error = ({
  className,
  children,
  ...spanProps
}: ComponentProps<"span">) => {
  return (
    <span
      className={classnames("text-sm text-red-600", className)}
      {...spanProps}
    >
      {children}
    </span>
  );
};
