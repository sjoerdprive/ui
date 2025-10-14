import { useEffect, useState, type RefObject } from "react";
import { useIsMounted } from "./use-is-mounted";

export const useWidth = (ref: RefObject<HTMLElement | null> | undefined) => {
  const isMounted = useIsMounted();
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const element = ref?.current;
    if (!isMounted || !element) {
      return;
    }
    const handleResize = () => {
      if (element) {
        setWidth(element.getBoundingClientRect().width);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [isMounted, ref]);

  return width ?? 0;
};
