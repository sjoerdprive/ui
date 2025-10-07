import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  forwardRef,
  useRef,
  type ComponentProps,
  type ForwardedRef,
} from "react";
import { useCombinedRefs } from "../../hooks/use-combined-refs";
import { useKey } from "../../hooks/use-key";
import { Button } from "../button";

export const Close = forwardRef(
  (
    {
      className,
      children,
      onClick,
      ...buttonProps
    }: ComponentProps<typeof Button>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const button = useRef<HTMLButtonElement>(null);
    const combinedRef = useCombinedRefs(ref, button);

    useKey("Escape", () => {
      combinedRef.current?.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1,
        })
      );
    });

    return (
      <Button
        ref={combinedRef}
        square
        height="sm"
        onClick={onClick}
        className={`ml-auto ${className}`}
        {...buttonProps}
      >
        {children ?? <FontAwesomeIcon icon={faTimes} />}
      </Button>
    );
  }
);
