import type { ComponentProps, ReactNode } from "react";
import type { WithTheme } from "../../config";

export interface ToastCallback {
  label: ReactNode;
  callback?: () => void;
}

export interface ToastProps
  extends Omit<ComponentProps<"div">, "title" | "children">,
    WithTheme {
  message: ReactNode;
  title?: ReactNode;
  actions?: ToastCallback[];
}
