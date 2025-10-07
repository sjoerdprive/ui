import { useLayoutEffect, useState } from "react";

export const useIsMounted = () => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useLayoutEffect(() => {
    if (hasTransitionedIn) {
      return;
    }

    requestAnimationFrame(() => {
      setHasTransitionedIn(true);
    });
  }, [hasTransitionedIn]);

  return hasTransitionedIn;
};
