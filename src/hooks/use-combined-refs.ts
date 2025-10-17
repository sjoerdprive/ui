"use client";
import { useEffect, useRef } from "react";

export function useCombinedRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    }
  }, [refs]);

  return targetRef;
}
