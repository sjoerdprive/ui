import {
  forwardRef,
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
        {children ?? <Input ref={ref} {...inputProps} />}
        {error && <Error className="absolute bottom-0 left-0">{error}</Error>}
      </div>
    );
  }
);
