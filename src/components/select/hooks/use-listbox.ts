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
  listboxRef: RefObject<R>,
  onChange?: (index: number) => void
) => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const numberOfItems = useMemo(() => items.length, [items]);

  const reset = useCallback(() => {
    setFocusIndex(-1);
  }, []);

  useKey("ArrowUp", () => {
    if (!listboxRef?.current) return;

    listboxRef?.current?.focus();

    setFocusIndex((prev) => {
      if (prev === undefined) {
        return numberOfItems - 1;
      }
      const updatedIndex = prev === 0 ? numberOfItems - 1 : prev - 1;

      onChange?.(updatedIndex);
      return updatedIndex;
    });
  });

  useKey("ArrowDown", () => {
    if (!listboxRef?.current) return;

    listboxRef?.current?.focus();

    setFocusIndex((prev) => {
      if (prev === undefined) {
        return 0;
      }
      const updatedIndex = prev === numberOfItems - 1 ? 0 : prev + 1;

      onChange?.(updatedIndex);
      return updatedIndex;
    });
  });

  useKey("Home", () => {
    if (!listboxRef?.current) return;

    setFocusIndex(0);
    onChange?.(0);
  });

  useKey("End", () => {
    if (!listboxRef?.current) return;

    setFocusIndex(numberOfItems - 1);
    onChange?.(numberOfItems - 1);
  });

  useEffect(() => {
    if (listboxRef?.current) return;

    setFocusIndex(-1);
  }, [listboxRef]);

  useEffect(() => {
    if (numberOfItems === 0) {
      setFocusIndex(-1);
    } else if (focusIndex >= numberOfItems) {
      setFocusIndex(numberOfItems - 1);
    }
  }, [numberOfItems, focusIndex]);

  return [focusIndex, reset] as const;
};
