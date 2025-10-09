import type { ComponentProps, ReactNode, RefObject } from "react";
import type { InputStyles } from "../input";

export interface SelectProps<T>
  extends Omit<ComponentProps<"button">, "value" | "onChange">,
    InputStyles {
  renderOption?: (value: T) => ReactNode;
  options: T[];
  parents?: (string | RefObject<HTMLElement>)[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: ReactNode;
}
export interface MultipleProp<T> {
  multiple: true;
  renderValue?: (value: T[]) => ReactNode;
  value?: (string | number)[] | null;
}

export interface SingleProp<T> {
  multiple?: false | never;
  renderValue?: (value: T) => ReactNode;
  value?: string | number | null;
}

export interface IdentifierPropString {
  identifier?: never;
}

export interface IdentifierPropNonString<T> {
  identifier: (value: T) => string;
}

export type MultiSelectProps<T> = MultipleProp<T> | SingleProp<T>;

export type IdentifierProp<T> = T extends string | string[]
  ? IdentifierPropString
  : IdentifierPropNonString<T>;

export type SelectExtraProps<T> = IdentifierProp<T> &
  SelectProps<T> &
  MultiSelectProps<T>;