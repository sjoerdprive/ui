import {
  forwardRef,
  type ComponentProps,
  type ForwardedRef,
  type ReactNode,
} from "react";
import { heightClassVariants } from "../../class-variants/height";
import type { WithHeight, WithTheme } from "../../config";
import { classnames } from "../../utils";
import { toggleClassVariants } from "./class-variants";

interface ToggleProps
  extends Omit<ComponentProps<"input">, "height">,
    WithTheme,
    WithHeight {
  label?: ReactNode;
}

export const Toggle = forwardRef(
  (
    { className, height, theme, label, ...inputProps }: ToggleProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label
        className={heightClassVariants({
          height,
          className: classnames("flex items-center cursor-pointer gap-2", className),
        })}
      >
        <div
          className={toggleClassVariants({
            height,
            theme,
          })}
        >
          <input
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            {...inputProps}
          />
          <div className="absolute left-0.5 top-0.5 bottom-0.5 w-auto bg-white aspect-square rounded-full transition peer-checked:translate-x-[calc(100%)]"></div>
        </div>
        {label}
      </label>
    );
  }
);
