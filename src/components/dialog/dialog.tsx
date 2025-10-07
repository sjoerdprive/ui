import { useMemo, type ComponentProps, type ReactNode } from "react";
import { Popper } from "../popper";
import { Backdrop } from "./backdrop";
import { Body } from "./body";
import { Center } from "./center";
import { Close } from "./close";
import { Header } from "./header";
import { Title } from "./title";

interface DialogProps<T extends HTMLElement | null>
  extends Omit<ComponentProps<typeof Popper<T>>, "title"> {
  onClose?: () => void;
  title?: ReactNode;
}

export const Dialog = <T extends HTMLElement | null>({
  children,
  onClose,
  title,
  ...popperProps
}: DialogProps<T>) => {
  const showHeader = useMemo(() => !!(onClose || title), [onClose, title]);

  return (
    <Popper {...popperProps}>
      <Backdrop onClick={onClose} />
      <Center>
        <Body
          focusTrapOptions={{
            escapeDeactivates: !!onClose,
          }}
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
