"use client";
import type { ComponentProps } from "react";
import { classnames } from "../../utils";
import { Typography } from "../typography";

export const Title = ({
  children,
  className,
  ...h2Props
}: ComponentProps<"h2">) => {
  return (
    <Typography
      as="h2"
      className={classnames("font-semibold flex-grow truncate", className)}
      {...h2Props}
    >
      {children}
    </Typography>
  );
};
