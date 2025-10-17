"use client";
import {
  forwardRef,
  useCallback,
  useId,
  useRef,
  type ComponentProps,
  type ForwardedRef,
} from "react";
import { classnames } from "../../utils";
import { useListbox } from "./use-listbox";
import { useCombinedRefs } from "../../hooks/use-combined-refs";
import { useKey } from "../../hooks/use-key";

export interface ChildProps {
  isFocused: (index: number) => boolean;
  getId: (index: number) => string;
}

export interface ListboxProps<T> extends Omit<ComponentProps<"ul">, "children"> {
  options?: T[];
  children: (props: ChildProps) => React.ReactNode;
}

export const Listbox = forwardRef(
  <T,>(
    { className, children, options = [], id, ...ulProps }: ListboxProps<T>,
    ref: ForwardedRef<HTMLUListElement>
  ) => {
    const defaultId = useId();
    const listBoxId = id ?? defaultId;
    const internalRef = useRef<HTMLUListElement>(null);
    const listboxRef = useCombinedRefs(ref, internalRef);

    const getId = useCallback(
      (index: number) => `${listBoxId}__${index}`,
      [listBoxId]
    );

    const scrollToIndex = useCallback(
      (index: number) => {
        if (listboxRef.current) {
          const idToFocus = getId(index);
          const element = listboxRef.current.querySelector(`#${idToFocus}`);
          element?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      },
      [listboxRef, getId]
    );

    const [focusIndex] = useListbox(options, listboxRef, scrollToIndex);

    const isFocused = useCallback(
      (index: number) => index === focusIndex,
      [focusIndex]
    );

    useKey("Enter", () => {
      document.getElementById(getId(focusIndex))?.click();
    });

    useKey("Space", (e) => {
      e.preventDefault();
      document.getElementById(getId(focusIndex))?.click();
    });

    return (
      <ul
        id={listBoxId}
        ref={listboxRef}
        role="listbox"
        tabIndex={-1}
        className={classnames("outline-0 overflow-y-auto", className)}
        aria-activedescendant={getId(focusIndex)}
        {...ulProps}
      >
        <div className="flex flex-col h-fit">
          {children({ getId, isFocused })}
        </div>
      </ul>
    );
  }
);
