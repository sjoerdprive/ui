"use client";
import { themeClassVariants } from "../../class-variants";
import { classnames } from "../../utils";
import type { AlertProps } from "./types";

export const Alert = ({
  theme,
  children,
  className,
  ...divProps
}: AlertProps) => {
  return (
    <div
      role="alert"
      className={classnames(
        themeClassVariants({
          theme,
          className,
        }),
        "flex gap-3 p-4 rounded-lg bg-(--theme-50) border border-(--theme-200) text-(--theme-500) items-center"
      )}
      {...divProps}
    >
      {children}
    </div>
  );
};
