import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeClassVariants } from "../../class-variants";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { classnames } from "../../utils";
import { Button } from "../button";
import { Typography } from "../typography";
import type { ToastProps as BaseToastProps } from "./types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ToastProps extends BaseToastProps {
  onRemove?: (id: string) => void;
}

export const Toast = ({
  message,
  theme,
  title,
  className,
  onRemove,
  ...divProps
}: ToastProps) => {
  const isMounted = useIsMounted();

  return (
    <div
      className={themeClassVariants({
        theme,
        className: classnames(
          "bg-black text-white px-3 py-2 shadow-md shadow-gray-400 rounded-lg  flex gap-2 items-start blur-2xl opacity-0 transition z-[inherit]",
          {
            "blur-none opacity-100": isMounted,
          },
          className
        ),
      })}
      {...divProps}
    >
      <div className="flex flex-col gap-1">
        {title && <Typography size="h4" className="my-1" >{title}</Typography>}
        {message}
      </div>
      <Button
        className="ml-auto hover:!bg-gray-700"
        height="xs"
        square
        onClick={() => {
          console.log("click");
          onRemove?.(divProps.id!);
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </div>
  );
};
