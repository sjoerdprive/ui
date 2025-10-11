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
        <Label htmlFor={inputId}>{label}</Label>
      ) : (
        label
      );
    }, [label, inputId]);

    return (
      <div
        role="group"
        className={classnames("flex flex-col justify-end relative", className)}
      >
        {renderedLabel}
        {children ?? <Input aria-describedby={errorId} ref={ref} {...inputProps} />}
        {error && (
          <Error id={errorId} className="absolute right-3 height-full flex items-center justify-center leading-none bg-red-500 w-4 h-4 text-white rounded-full p-0.5">
            {error}
          </Error>
        )}
      </div>
    );
  }
);
