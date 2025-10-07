import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ComponentProps } from "react";
import { Popper } from "../components/popper";
import { Button } from "../components/button";

interface DialogProps<T extends HTMLElement | null>
  extends ComponentProps<typeof Popper<T>> {
  onClose?: () => void;
}

export const Dialog = <T extends HTMLElement | null>({
  children,
  onClose,
  ...popperProps
}: DialogProps<T>) => {
  return (
    <Popper {...popperProps}>
      <div
        className="w-dvw h-dvh bg-black/10 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg w-96">
          <header className="px-4 py-3 flex gap-2">
            {onClose && (
              <button onClick={() => onClose()}>
                <FontAwesomeIcon icon={faTimes} aria-label="close" />
              </button>
            )}
          </header>
          <main className="px-4 py-3 not-first:pt-0">{children}</main>
          <footer className="px-4 py-3 border-t border-gray-200 bg-gray-100 flex gap-2 justify-end">
            <Button theme="primary">Save changes</Button>
            <Button onClick={onClose}>Close</Button>
          </footer>
        </div>
      </div>
    </Popper>
  );
};
