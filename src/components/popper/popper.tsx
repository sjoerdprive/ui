"use client";
import { forwardRef, type ComponentProps, type ForwardedRef } from "react";
import { createPortal } from "react-dom";
import { classnames } from "../../utils";
import type { PopperProps as ExtraPopperProps } from "./types";
import { POPPER_DEPTH } from "../../config";

const offset = 4;

export interface PopperProps<T extends HTMLElement | null>
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
    attachToAnchorParent,
    ...divProps
  }: PopperProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const rect = anchor?.current?.getBoundingClientRect();

  const maxLeft = (window?.innerWidth ?? 0) - (rect?.width ?? 0) - offset;
  const maxTop = (window?.innerHeight ?? 0) - (rect?.height ?? 0) - offset;

  const left = Math.min(Math.max(rect?.x ?? 0, offset), maxLeft);
  const top = Math.min(
    Math.max((rect?.y ?? 0) + (rect?.height ?? 0), offset),
    maxTop
  );

  const root =
    attachToAnchorParent && anchor?.current?.parentElement
      ? anchor?.current?.parentElement
      : document?.body;

  if (!isVisible) return null;

  return createPortal(
    <div
      {...divProps}
      ref={ref}
      style={{
        left,
        top,
        zIndex,
        ...style,
      }}
      onClick={() => console.log("clicked popper")}
      className={classnames("fixed", className)}
    >
      {children}
    </div>,
    root
  );
};

export const Popper = forwardRef(PopperComponent) as <
  T extends HTMLElement | null
>(
  props: PopperProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;
