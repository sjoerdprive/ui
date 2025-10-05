import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { classnames } from "../../utils";

interface AffixProps extends ComponentProps<"span"> {
  before?: boolean;
  after?: boolean;
}

export const Affix = forwardRef(
  (
    { children, className, before, after, ...spanProps }: AffixProps,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
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
  }
);
