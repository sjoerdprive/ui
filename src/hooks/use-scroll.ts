import { useLayoutEffect } from "react";

export function useScroll(callback: () => void) {
  useLayoutEffect(() => {
    window.addEventListener("wheel", callback);

    return () => {
      window.removeEventListener("wheel", callback);
    };
  });
}
