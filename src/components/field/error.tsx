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
  return (
    <>
      <span
        ref={errorRef}
        className={classnames("text-sm", className)}
        {...spanProps}
      >
        <FontAwesomeIcon icon={faExclamation} />
      </span>
      <Tooltip anchor={errorRef}>
        <span className="text-sm bg-red-500 text-white px-2 py-1 rounded">
          {children}
        </span>
      </Tooltip>
    </>
  );
};
