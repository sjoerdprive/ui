"use client";
import {
  forwardRef,
  useId,
  useMemo,
  type ComponentProps,
  type ForwardedRef,
  type ReactNode,
} from "react";
import { classnames } from "../../utils";
import { Input } from "../input";
import { Error } from "./error";
import { Label } from "./label";

export interface FieldProps extends ComponentProps<typeof Input> {
  label?: ReactNode;
  error?: string;
  inputId?: string;
}

export const Field = forwardRef(
  (
    { className, children, label, error, inputId, ...inputProps }: FieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const errorId = useId();
    const renderedLabel = useMemo(() => {
      return typeof label === "string" ? (
        <Label htmlFor={inputId} aria-describedby={errorId}>
          {label}
        </Label>
      ) : (
        label
      );
    }, [label, inputId, errorId]);

    return (
      <div
        role="group"
        className={classnames("flex flex-col justify-end relative", className)}
      >
        {(label || error) && (
          <div className="flex items-center mb-0.5">
            {renderedLabel}
            <Error
              id={errorId}
              className="flex items-center justify-center leading-none text-red-500 p-0.5 text-xs"
            >
              {error}
            </Error>
          </div>
        )}
        {children ?? (
          <Input
            aria-description={error}
            aria-invalid={!!error}
            ref={ref}
            {...inputProps}
          />
        )}
      </div>
    );
  }
);
