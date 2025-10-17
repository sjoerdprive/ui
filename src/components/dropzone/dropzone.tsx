"use client";
import {
  forwardRef,
  useCallback,
  useMemo,
  type ComponentProps,
  type ReactNode,
  type RefObject,
} from "react";
import { useDropzone, type Accept, type FileWithPath } from "react-dropzone";
import { classnames } from "../../utils";
import { inputClassVariants, type InputStyles } from "../input";
import { Preview } from "./file-preview";

export interface DropzoneProps
  extends Omit<
      ComponentProps<"input">,
      "height" | "placeholder" | "onChange" | "value" | "accept"
    >,
    InputStyles {
  placeholder?: ReactNode;
  value?: FileWithPath[];
  variant?: "default" | "avatar";
  onChange: (files: FileWithPath[]) => void;
  accept?: Accept;
  multiple?: boolean;
}

export const Dropzone = forwardRef(
  ({
    className,
    onChange,
    height,
    placeholder,
    value,
    variant = "default",
    multiple = false,
    disabled,
    accept,
    ...inputProps
  }: DropzoneProps) => {
    const { getRootProps, getInputProps, rootRef, isDragAccept, isDragReject } =
      useDropzone({
        onDropAccepted: onChange,
        multiple,
        disabled,
        accept,
      });

    const removeValue = useCallback(
      (val: FileWithPath) => {
        onChange(value?.filter((v) => v.path !== val.path) ?? []);
      },
      [value, onChange]
    );

    const preview = useMemo(() => {
      if (!value?.length) return placeholder;

      if (variant === "avatar" && value[0]) {
        return (
          <img
            alt=""
            className="absolute inset-0 object-cover rounded-full h-full w-full aspect-square"
            src={URL.createObjectURL(value[0])}
          />
        );
      }
      return (
        <div className="flex gap-2">
          {value.map((file) => (
            <Preview
              key={file.path}
              file={file}
              onClick={() => removeValue(file)}
            />
          ))}
        </div>
      );
    }, [value, placeholder, variant, removeValue]);

    return (
      <div
        {...getRootProps({
          className: inputClassVariants({
            className: classnames(
              "relative cursor-pointer",
              {
                "rounded-full h-24 w-24 aspect-square": variant === "avatar",
                "overflow-x-auto scrollbar-hide": variant === "default",
                "!outline-green-500 not-disabled:outline-2 not-has-disabled:outline-2":
                  isDragAccept,
                "!outline-red-500 not-has-disabled:outline-2 not-disabled:outline-2":
                  isDragReject,
              },
              className
            ),
            height,
          }),
        })}
        ref={rootRef as RefObject<HTMLDivElement>}
      >
        <input {...getInputProps(inputProps)} />
        {preview}
      </div>
    );
  }
);
