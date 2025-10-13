import { useRef, type ComponentProps } from "react";
import { classnames } from "../../utils";
import { Tooltip } from "../tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

export const Error = ({
  className,
  children,
  ...spanProps
}: ComponentProps<"span">) => {
  const errorRef = useRef<HTMLSpanElement>(null);

  if (!children) {
    return null;
  }

  return (
    <>
      <span
        role="alert"
        ref={errorRef}
        className={classnames(
          "flex items-center justify-center leading-none text-red-500 p-0.5 text-xs",
          className
        )}
        {...spanProps}
      >
        <FontAwesomeIcon icon={faExclamation} />
      </span>
      <Tooltip anchor={errorRef}>
        <Tooltip.Content className="text-sm bg-red-500 text-white px-2 py-1 rounded">
          {children}
        </Tooltip.Content>
      </Tooltip>
    </>
  );
};
