import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Center = ({
  children,
  className,
  ...divProps
}: ComponentProps<"div">) => {
  return (
    <div
      className={classnames(
        "w-dvw h-dvh flex items-center justify-center p-4",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
};
