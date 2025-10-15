import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { createPortal } from "react-dom";
import { classnames } from "../../utils";
import type { PopperProps as ExtraPopperProps } from "./types";
import { POPPER_DEPTH } from "../../config";

const offset = 4;

interface PopperProps<T extends HTMLElement | null>
  extends ComponentProps<"div">,
    ExtraPopperProps<T> {
  zIndex?: number;
}

const PopperComponent = <T extends HTMLElement | null>(
  {
    children,
    anchor,
    className,
    isVisible,
    style,
    zIndex = POPPER_DEPTH.BASE,
    ...divProps
  }: PopperProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const rect = anchor?.current?.getBoundingClientRect();

  if (!isVisible) return null;

  return createPortal(
    <div
      {...divProps}
      ref={ref}
      style={{
        left: rect?.x ?? 0,
        top: (rect?.y ?? 0) + (rect?.height ?? 0) + offset,
        zIndex,
        ...style,
      }}
      onClick={() => console.log("clicked popper")}
      className={classnames("fixed", className)}
    >
      {children}
    </div>,
    anchor?.current?.parentElement ?? document.body
  );
};

export const Popper = forwardRef(PopperComponent) as <
  T extends HTMLElement | null
>(
  props: PopperProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;
