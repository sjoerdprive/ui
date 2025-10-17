"use client";
import { useId, useLayoutEffect, useState, type ComponentProps } from "react";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { Popper } from "../popper";
import { Content } from "./content";
import { POPPER_DEPTH } from "../../config";

export const Tooltip = ({
  children,
  anchor,
}: ComponentProps<typeof Popper>) => {
  const isMounted = useIsMounted();
  const [isVisible, setIsVisible] = useState(false);
  const id = useId();

  useLayoutEffect(() => {
    const element = anchor?.current;
    if (!isMounted) {
      return;
    }
    const startHover = () => {
      setIsVisible(true);
    };
    const endHover = () => {
      setIsVisible(false);
    };

    element?.setAttribute("aria-describedby", id);
    element?.setAttribute("tabindex", "0");

    element?.addEventListener("mouseenter", startHover);
    element?.addEventListener("mouseleave", endHover);

    element?.addEventListener("focus", startHover);
    element?.addEventListener("blur", endHover);

    return () => {
      element?.removeEventListener("mouseenter", startHover);
      element?.removeEventListener("mouseleave", endHover);
      element?.removeEventListener("focus", startHover);
      element?.removeEventListener("blur", endHover);

      element?.removeAttribute("aria-describedby");
      element?.removeAttribute("tabindex");
    };
  }, [anchor, isMounted, id]);

  return (
    <Popper
      id={id}
      isVisible={isVisible}
      anchor={anchor}
      zIndex={POPPER_DEPTH.TOOLTIP}
    >
      {typeof children === "string" ? <Content>{children}</Content> : children}
    </Popper>
  );
};
