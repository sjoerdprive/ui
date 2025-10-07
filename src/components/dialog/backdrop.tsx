import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Backdrop = ({
  className,
  children,
  ...divProps
}: ComponentProps<"div">) => {
  return (
    <div
      className={classnames(
        "bg-black/10 backdrop-blur-xs z-40 fixed inset-0",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
};
