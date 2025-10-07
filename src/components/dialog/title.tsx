import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Title = ({
  children,
  className,
  ...h2Props
}: ComponentProps<"h2">) => {
  return (
    <h2
      className={classnames("font-semibold flex-grow truncate", className)}
      {...h2Props}
    >
      {children}
    </h2>
  );
};
