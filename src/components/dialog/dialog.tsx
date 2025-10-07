import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, type ComponentProps, type ReactNode } from "react";
import { Popper } from "../popper";
import { Button } from "../button";
import { Title } from "./title";
import { Header } from "./header";
import { Backdrop } from "./backdrop";
import { Body } from "./body";
import { Center } from "./center";

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
        <Body>
          {showHeader && (
            <Header>
              {title && <Title>{title}</Title>}
              {onClose && (
                <Button
                  square
                  height="sm"
                  onClick={() => onClose()}
                  className="ml-auto"
                >
                  <FontAwesomeIcon icon={faTimes} aria-label="close" />
                </Button>
              )}
            </Header>
          )}
          {children}
        </Body>
      </Center>
    </Popper>
  );
};
