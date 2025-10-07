import type { RefObject } from "react";

export interface PopperProps<T extends HTMLElement | null> {
  anchor?: RefObject<T>;
  isVisible?: boolean;
}
