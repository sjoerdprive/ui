import type { RefObject } from "react";

export interface PopperProps<T = HTMLElement | null> {
  anchor?: RefObject<T>;
  isVisible?: boolean;
  attachToAnchorParent?: boolean;
}
