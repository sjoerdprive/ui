import type { ToastProps } from "./types";

// lib/eventEmitter.ts
export type Listener = (payload: ToastProps) => void;

function createToastController() {
  const listeners = new Set<Listener>();

  return {
    on(listener: Listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    emit(payload: ToastProps) {
      for (const listener of listeners) {
        listener(payload);
      }
    },
  };
}

export const getToastController = () => {
  const globalAny = globalThis as typeof globalThis & {
    ToastController?: ReturnType<typeof createToastController>;
  };

  if (!globalAny.ToastController) {
    globalAny.ToastController = createToastController();
  }

  return globalAny.ToastController;
};

export const useToastController = () => {
  return getToastController();
};
