import { useRef, useCallback, useEffect } from "react";

const DEFAULT_DELAY = 300;

/**
 * React hook to debounce any function.
 *
 * - Works with sync & async functions
 * - Preserves function identity between renders
 * - Supports cancellation & immediate (flush) execution
 *
 * @param fn The function to debounce
 * @param delay The debounce delay in milliseconds
 * @returns [debouncedFn, controls]
 */
export function useDebounce<T extends (...args: any[]) => any>(
  fn: T,
  delay = DEFAULT_DELAY
): [
  (...args: Parameters<T>) => void,
  {
    cancel: () => void;
    flush: (...args: Parameters<T>) => ReturnType<T> | undefined;
  }
] {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fnRef = useRef(fn);

  // Always use the latest version of the function
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const flush = useCallback(
    (...args: Parameters<T>): ReturnType<T> | undefined => {
      cancel();
      return fnRef.current?.(...args);
    },
    [cancel]
  );

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      cancel();
      timeoutRef.current = setTimeout(() => {
        fnRef.current?.(...args);
        timeoutRef.current = null;
      }, delay);
    },
    [delay, cancel]
  );

  // Cleanup on unmount
  useEffect(() => cancel, [cancel]);

  return [debounced, { cancel, flush }];
}
