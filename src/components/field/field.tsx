import {
  forwardRef,
  useId,
  useMemo,
  type ComponentProps,
  type ForwardedRef,
  type ReactNode,
} from "react";
import { Input } from "../input";
import { classnames } from "../../utils";
import { Label } from "./label";
import { Error } from "./error";

interface FieldProps extends ComponentProps<typeof Input> {
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
        <Label htmlFor={inputId}>{label} </Label>
      ) : (
        label
      );
    }, [label, inputId]);

    return (
      <div
        role="group"
        className={classnames("flex flex-col justify-end relative", className)}
      >
        {(label || error) && (
          <div className="flex items-center mb-1">
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
          <Input aria-describedby={errorId} ref={ref} {...inputProps} />
        )}
      </div>
    );
  }
);
