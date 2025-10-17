"use client";
import type { ComponentProps } from "react";
import { classnames } from "../../utils";
import { useIsMounted } from "../../hooks/use-is-mounted";

export const Content = ({
  children,
  className,
  ...divProps
}: ComponentProps<"div">) => {
  const isMounted = useIsMounted();
  return (
    <div
      className={classnames(
        "px-3 py-2 bg-black text-white shadow-md rounded-md translate-y-1 opacity-0 transition",
        {
          "opacity-100 translate-y-0": isMounted,
        },
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
};
