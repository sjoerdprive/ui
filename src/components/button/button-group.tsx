"use client";
import { type ComponentProps, type Ref } from "react";
import { classnames } from "../../utils";

export interface ButtonGroupProps extends ComponentProps<"div"> {
  ref?: Ref<HTMLDivElement>;
}

export const Group = ({ className, children, ref, ...divProps }: ButtonGroupProps) => {
  return (
    <div
      role="group"
      ref={ref}
      className={classnames(
        "flex *:not-last:rounded-r-none *:not-first:rounded-l-none w-fit",
        className
      )}
      {...divProps}
    >
      {children}
    </div>
  );
};
