import {
  forwardRef,
  type ComponentProps,
  type ReactNode,
  type RefObject,
} from "react";
import { useDropzone } from "react-dropzone";
import { classnames } from "../../utils";
import { inputClassVariants, type InputStyles } from "../input";
import { FilePreview } from "./file-preview";

interface DropzoneProps
  extends Omit<ComponentProps<"input">, "height" | "placeholder">,
    InputStyles {
  placeholder?: ReactNode;
}

export const Dropzone = forwardRef(
  ({ className, height, placeholder, ...inputProps }: DropzoneProps) => {
    const { getRootProps, getInputProps, rootRef, acceptedFiles } =
      useDropzone();

    return (
      <div
        {...getRootProps({
          className: inputClassVariants({
            className: classnames("", className),
            height,
          }),
        })}
        ref={rootRef as RefObject<HTMLDivElement>}
      >
        <input
          {...getInputProps({
            ...inputProps,
          })}
        />
        <div className="flex flex-wrap gap-2">
          {acceptedFiles?.length
            ? acceptedFiles.map((file) => (
                <FilePreview key={file.path} file={file} />
              ))
            : placeholder}
        </div>
      </div>
    );
  }
);
