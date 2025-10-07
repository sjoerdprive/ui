import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { createPortal } from "react-dom";
import type { PopperProps as ExtraPopperProps } from "./types";

const offset = 4;

interface PopperProps<T extends HTMLElement | null>
  extends Omit<ComponentProps<"div">, "className">,
    ExtraPopperProps<T> {}

const PopperComponent = <T extends HTMLElement | null>(
  { children, anchor, isVisible, ...divProps }: PopperProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  if (!isVisible) return null;

  const rect = anchor?.current?.getBoundingClientRect();

  return createPortal(
    <div
      {...divProps}
      ref={ref}
      style={{
        left: rect?.x ?? 0,
        top: (rect?.y ?? 0) + (rect?.height ?? 0) + offset,
      }}
      className="fixed"
    >
      {children}
    </div>,
    document.body
  );
};

export const Popper = forwardRef(PopperComponent) as <
  T extends HTMLElement | null
>(
  props: PopperProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;
