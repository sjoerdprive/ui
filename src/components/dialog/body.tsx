import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Body = ({
  children,
  className,
  ...bodyProps
}: ComponentProps<"div">) => {
  return (
    <div
      className={classnames(
        "bg-white rounded-lg overflow-hidden shadow-lg w-96 max-w-dvw z-60 fixed",
        className
      )}
      {...bodyProps}
    >
      {children}
    </div>
  );
};
