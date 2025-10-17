"use client";
import { useCallback, useState } from "react";
import { comboboxFilterDefault } from "../components/select/utils";
import { useDebounce } from "./use-debounce";

export interface UseFilteredOptions<T, R extends string> {
  minQueryLength?: number;
  filterFn?: (query: R) => T[] | Promise<T[]>;
  debounce?: number;
}

interface UseFilteredStatus {
  isPending: boolean;
  isError: boolean;
}

export const useFiltered = <T, R extends string>(
  items: T[],
  options?: UseFilteredOptions<T, R>
) => {
  const [results, setResults] = useState<T[]>(items);
  const [status, setStatus] = useState<UseFilteredStatus>({
    isError: false,
    isPending: false,
  });

  const { minQueryLength, filterFn, debounce } = {
    minQueryLength: 2,
    filterFn: comboboxFilterDefault<T>(items),
    debounce: 0,
    ...options,
  } satisfies UseFilteredOptions<T, R>;
  const executeFilter = useCallback(
    async (query: R) => {
      const returnAllItems =
        (typeof query === "string" &&
          minQueryLength &&
          query?.length < minQueryLength) ||
        !filterFn ||
        !query;

      if (returnAllItems) {
        setResults(items);
        return;
      }
      try {
        setStatus({ isPending: true, isError: false });
        const filterFnResult = await filterFn(query);
        return setResults(filterFnResult);
      } catch (error) {
        console.warn(error);
        setStatus((prev) => ({ ...prev, isError: true }));
      } finally {
        setStatus((prev) => ({ ...prev, isPending: false }));
      }
    },
    [filterFn, items, minQueryLength]
  );

  const [filter] = useDebounce(executeFilter, debounce);

  return [results, filter, status] as const;
};
