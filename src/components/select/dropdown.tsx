import {
  forwardRef,
  useMemo,
  type ComponentProps,
  type ForwardedRef,
} from "react";
import { Popper } from "../popper";
import type { PopperProps } from "../popper/types";
import { useWidth } from "../../hooks/use-width";
import { classnames } from "../../utils";

const windowMargin = 32;

interface DropdownProps extends ComponentProps<"div">, PopperProps {
  zIndex?: number;
}

export const Dropdown = forwardRef(
  (
    {
      className,
      isVisible,
      anchor,
      children,
      zIndex = 60,
      ...divProps
    }: DropdownProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const width = useWidth(anchor);
    const rect = anchor?.current?.getBoundingClientRect();

    const maxHeight = useMemo(() => {
      if (!rect) return undefined;
      return window.innerHeight - (rect.y + rect.height) - windowMargin;
    }, [rect]);

    return (
      <Popper anchor={anchor} isVisible={isVisible} style={{ zIndex }}>
        <div
          ref={ref}
          className={classnames(
            "shadow-lg rounded-lg border border-gray-200 bg-white overflow-hidden",
            className
          )}
          style={
            {
              width,
              maxHeight,
            } as React.CSSProperties
          }
          {...divProps}
        >
          {children}
        </div>
      </Popper>
    );
  }
);
