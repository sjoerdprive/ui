import type { ComponentProps } from "react";
import type { WithHeight, WithTheme } from "../../config";
import { spinnerClassVariants, spinnerContainerClass } from "./class-variance";

interface SpinnerProps extends ComponentProps<"div">, WithTheme, WithHeight {}

export const Spinner = ({
  theme,
  height,
  className,
  ...divProps
}: SpinnerProps) => {
  return (
    <div className={spinnerContainerClass({ height, className })} {...divProps}>
      <div className={spinnerClassVariants({ height, theme })} />
    </div>
  );
};
