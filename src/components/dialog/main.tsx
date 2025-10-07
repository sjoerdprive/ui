import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Main = ({
  children,
  className,
  ...bodyProps
}: ComponentProps<"main">) => {
  return (
    <main
      className={classnames("px-4 py-3 not-first:pt-0", className)}
      {...bodyProps}
    >
      {children}
    </main>
  );
};
