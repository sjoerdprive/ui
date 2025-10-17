"use client";
import { useEffect, type RefObject } from "react";

export const useClickOutside = (
  refs: (RefObject<HTMLElement | null> | string | undefined)[],
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const refElements = refs
        .map((refOrId) => {
          if (typeof refOrId === "string") {
            return document.getElementById(refOrId);
          }

          return (refOrId as RefObject<HTMLElement>)?.current;
        })
        .filter(Boolean);

      if (
        refElements.length > 0 &&
        !refElements.some((el) => el?.contains(event.target as Node))
      ) {
        callback(event);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
};
