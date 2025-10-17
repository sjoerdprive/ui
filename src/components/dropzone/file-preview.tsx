"use client";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, type ComponentProps } from "react";
import type { FileWithPath } from "react-dropzone";
import { Button } from "../button";
import { Tooltip } from "../tooltip";

export interface FilePreviewProps extends ComponentProps<typeof Button> {
  file: FileWithPath;
}

export const Preview = ({
  children,
  file,
  ...buttonProps
}: FilePreviewProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const src = URL.createObjectURL(file);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(src);
    };
  });

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
          <img alt={file.name} src={src} />
        </Tooltip.Content>
      </Tooltip>
    </>
  );
};
