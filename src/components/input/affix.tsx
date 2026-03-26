"use client";
import { type ComponentProps, type Ref } from "react";
import { classnames } from "../../utils";

export interface AffixProps extends ComponentProps<"span"> {
  before?: boolean;
  after?: boolean;
  ref?: Ref<HTMLSpanElement>;
}

export const Affix = ({ children, className, before, after, ref, ...spanProps }: AffixProps) => {
  return (
    <span
      ref={ref}
      className={classnames(
        "flex items-center justify-center px-3",
        {
          "pr-0": before,
          "pl-0": after,
        },
        className
      )}
      {...spanProps}
    >
      {children}
    </span>
  );
};
