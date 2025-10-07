import type { ComponentProps } from "react";
import { classnames } from "../../utils";

export const Main = ({
  children,
  className,
  ...bodyProps
}: ComponentProps<"main">) => {
  return (
    <main
      className={classnames("px-5 py-4 not-first:pt-0", className)}
      {...bodyProps}
    >
      {children}
    </main>
  );
};
