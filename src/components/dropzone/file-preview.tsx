import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, type ComponentProps } from "react";
import type { FileWithPath } from "react-dropzone";
import { Button } from "../button";
import { Tooltip } from "../tooltip";

interface FilePreviewProps extends ComponentProps<typeof Button> {
  file: FileWithPath;
}

export const Preview = ({
  children,
  file,
  ...buttonProps
}: FilePreviewProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={buttonRef}
        height="xs"
        variant="border"
        theme="primary"
        {...buttonProps}
      >
        {children ?? file.name}
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <Tooltip anchor={buttonRef}>
        <Tooltip.Content>
          <img
            width={512}
            height={512}
            alt={file.name}
            src={URL.createObjectURL(file)}
          />
        </Tooltip.Content>
      </Tooltip>
    </>
  );
};
