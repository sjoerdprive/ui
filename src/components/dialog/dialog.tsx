import { useMemo, type ComponentProps, type ReactNode } from "react";
import { Popper } from "../popper";
import { Backdrop } from "./backdrop";
import { Body } from "./body";
import { Center } from "./center";
import { Close } from "./close";
import { Header } from "./header";
import { Title } from "./title";
import { POPPER_DEPTH } from "../../config";

interface DialogProps<T extends HTMLElement | null>
  extends Omit<ComponentProps<typeof Popper<T>>, "title"> {
  onClose?: () => void;
  title?: ReactNode;
}

export const Dialog = <T extends HTMLElement | null>({
  children,
  onClose,
  title,
  className,
  zIndex = POPPER_DEPTH.DIALOG,
  ...popperProps
}: DialogProps<T>) => {
  const showHeader = useMemo(() => !!(onClose || title), [onClose, title]);

  return (
    <Popper {...popperProps} zIndex={zIndex}>
      <Backdrop onClick={onClose} />
      <Center>
        <Body
          focusTrapOptions={{
            escapeDeactivates: !!onClose,
          }}
          className={className}
        >
          {showHeader && (
            <Header>
              {title && <Title>{title}</Title>}
              {onClose && <Close onClick={onClose} aria-label="Close dialog" />}
            </Header>
          )}
          {children}
        </Body>
      </Center>
    </Popper>
  );
};
