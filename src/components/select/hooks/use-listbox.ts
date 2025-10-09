import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type RefObject,
} from "react";
import { useKey } from "../../../hooks/use-key";

export const useListbox = <T, R extends HTMLElement | null>(
  items: T[],
  listboxRef: RefObject<R>
) => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const numberOfItems = useMemo(() => items.length, [items]);

  useKey("ArrowUp", () => {
    if (!listboxRef?.current) return;

    listboxRef?.current?.focus();

    setFocusIndex((prev) => {
      if (prev === undefined) {
        return numberOfItems - 1;
      }
      return prev === 0 ? numberOfItems - 1 : prev - 1;
    });
  });

  useKey("ArrowDown", () => {
    if (!listboxRef?.current) return;

    listboxRef?.current?.focus();

    setFocusIndex((prev) => {
      if (prev === undefined) {
        return 0;
      }
      return prev === numberOfItems - 1 ? 0 : prev + 1;
    });
  });

  const reset = useCallback(() => {
    setFocusIndex(-1);
  }, []);

  useEffect(() => {
    if (listboxRef?.current) return;

    setFocusIndex(-1);
  }, [listboxRef]);

  return [focusIndex, reset] as const;
};
