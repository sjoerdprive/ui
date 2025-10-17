"use client";
import type { ComponentProps } from "react";
import { classnames } from "../../utils";
import { useIsMounted } from "../../hooks/use-is-mounted";

export const Backdrop = ({
  className,
  children,
  ...divProps
}: ComponentProps<"div">) => {
  const isMounted = useIsMounted();

  return (
    <div
      className={classnames(
        "bg-transparent backdrop-blur-none fixed inset-0 transition-all",
        {
          "backdrop-blur-xs bg-black/10": isMounted,
        },
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
};
