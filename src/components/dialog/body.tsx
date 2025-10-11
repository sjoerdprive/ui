import { FocusTrap, type FocusTrapProps } from "focus-trap-react";
import type { ComponentPropsWithoutRef } from "react";
import { classnames } from "../../utils";

export const Body = ({
  children,
  className,
  focusTrapOptions,
  ...bodyProps
}: ComponentPropsWithoutRef<"div"> & FocusTrapProps) => {
  return (
    <FocusTrap
      focusTrapOptions={{ escapeDeactivates: false, ...focusTrapOptions }}
    >
      <div
        className={classnames(
          "bg-white rounded-lg overflow-hidden shadow-lg w-120 max-w-dvw z-60 fixed",
          className
        )}
        {...bodyProps}
      >
        {children}
      </div>
    </FocusTrap>
  );
};
