"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Popper } from "../popper";
import { Toast } from "./toast";
import { type ToastProps } from "./types";
import { useToastController } from "./controller";
import { POPPER_DEPTH } from "../../config";

export const Toaster = () => {
  const [toasts, setToasts] = useState(new Map<string, ToastProps>());

  const { on } = useToastController();

  const toastArray: ToastProps[] = useMemo(
    () => [...toasts.values()],
    [toasts]
  );

  const addToast = useCallback((args: ToastProps) => {
    const id = args.id ?? String(Math.round(Math.random() * 10000));

    setToasts((prev) => {
      const newToasts = new Map(prev);
      newToasts.set(id, { ...args, id });

      return newToasts;
    });
  }, []);

  const removeToast = useCallback((id: string) => {
    console.log("removing", id);
    setToasts((prev) => {
      const newToasts = new Map(prev);
      newToasts.delete(id);

      return newToasts;
    });
  }, []);

  useEffect(() => {
    const unsub = on(addToast);

    return unsub;
  }, [on, addToast]);

  return (
    <Popper
      zIndex={POPPER_DEPTH.TOASTER}
      aria-live="polite"
      isVisible={true}
      style={{
        left: "unset",
        top: "unset",
      }}
      className="right-0 bottom-0 p-6 flex flex-col gap-2"
    >
      {toastArray.map((toast) => (
        <Toast key={toast.id} {...toast} onRemove={removeToast} />
      ))}
    </Popper>
  );
};
