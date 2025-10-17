"use client";
import { useEffect } from "react";

export const useKey = (key: string, action: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const eventKey = event.code;

      if (eventKey === key) {
        action(event);
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [key, action]);
};
