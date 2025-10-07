import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentProps,
  type ForwardedRef,
  type ReactNode,
  type RefObject,
} from "react";
import { twMerge } from "tw-merge";
import { useClickOutside } from "../../hooks/use-click-outside";
import { useScroll } from "../../hooks/use-scroll";
import { inputClassVariants } from "../input/class-variants";
import type { InputStyles } from "../input/types";
import { Popper } from "../popper";
import { classnames } from "../../utils";
import { Placeholder } from "./placeholder";

interface SelectProps<T>
  extends Omit<ComponentProps<"button">, "value" | "onChange">,
    InputStyles {
  renderOption?: (value: T) => ReactNode;
  options: T[];
  parents?: (string | RefObject<HTMLElement>)[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: ReactNode;
}
interface MultipleProp<T> {
  multiple: true;
  renderValue?: (value: T[]) => ReactNode;
  value?: (string | number)[];
}

interface SingleProp<T> {
  multiple?: false | never;
  renderValue?: (value: T) => ReactNode;
  value?: string | number;
}

interface IdentifierPropString {
  identifier?: never;
}

interface IdentifierPropNonString<T> {
  identifier: (value: T) => string;
}

type MultiSelectProps<T> = MultipleProp<T> | SingleProp<T>;

type IdentifierProp<T> = T extends string | string[]
  ? IdentifierPropString
  : IdentifierPropNonString<T>;

type SelectExtraProps<T> = IdentifierProp<T> &
  SelectProps<T> &
  MultiSelectProps<T>;

const SelectComponent = <T,>(
  {
    height,
    className,
    options,
    value,
    multiple,
    parents,
    name,
    placeholder,
    onChange,
    identifier,
    renderOption,
    renderValue,
    ...buttonProps
  }: SelectExtraProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const listboxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const listBoxId = useId();

  useClickOutside([listboxRef, buttonRef, ...(parents ?? [])], () =>
    setIsExpanded(false)
  );
  useScroll(() => setIsExpanded(false));

  const width = buttonRef?.current?.getBoundingClientRect().width;

  const showOptions = useMemo(
    () => !buttonProps.disabled && isExpanded,
    [buttonProps.disabled, isExpanded]
  );

  const selectedValue = useMemo(() => {
    const values = (options ?? []).filter((option) => {
      if (identifier) {
        if (multiple) {
          return (
            Array.isArray(value) &&
            value.some((val) => identifier(option) === val)
          );
        }
        return identifier(option) === value;
      }
      return option === value;
    });

    return multiple ? values : values[0];
  }, [options, value, multiple, identifier]);

  const getId = useCallback(
    (option: T) => {
      return identifier ? identifier(option) : (option as unknown as string);
    },
    [identifier]
  );

  const renderValueContent = useCallback(
    (val: T | T[]) => {
      if (!val) {
        return "";
      }

      if (Array.isArray(val)) {
        console.log({ val });
        return renderValue
          ? renderValue(val as T[] & T)
          : val.map((v) => getId(v)).join(", ");
      }

      return renderValue ? renderValue(val as T & T[]) : getId(val as T);
    },
    [renderValue, getId]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      setIsExpanded(!!multiple);
    },
    [onChange, multiple]
  );

  return (
    <>
      <button
        className={twMerge(
          inputClassVariants({
            height,
            className: classnames("text-start", className),
          })
        )}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isExpanded}
        aria-controls={listBoxId}
        type="button"
        ref={buttonRef}
        {...buttonProps}
      >
        <div className="grow overflow-hidden ">
          {selectedValue ? (
            renderValueContent(selectedValue)
          ) : typeof placeholder === "string" ? (
            <Placeholder>{placeholder}</Placeholder>
          ) : (
            placeholder
          )}
        </div>
        <FontAwesomeIcon
          className="text-gray-400 ml-auto pl-3"
          icon={showOptions ? faChevronUp : faChevronDown}
        />
      </button>

      <Popper isVisible={showOptions} ref={listboxRef} anchor={buttonRef}>
        <div
          role="listbox"
          id={listBoxId}
          className="flex flex-col shadow-lg rounded border border-gray-100 bg-white"
          style={
            {
              width,
            } as React.CSSProperties
          }
        >
          {options?.map((option) => (
            <label
              role="option"
              key={getId(option)}
              className="text-left px-3 py-1 hover:bg-gray-200 has-checked:bg-primary-100"
            >
              <input
                className="hidden"
                ref={ref}
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={getId(option)}
                checked={
                  multiple
                    ? Array.isArray(value) && value.includes(getId(option))
                    : getId(option) === value
                }
                onChange={handleChange}
              />
              {renderOption
                ? renderOption(option as T & T[])
                : multiple
                ? getId(option)
                : renderValueContent(option as T & T[])}
            </label>
          ))}
        </div>
      </Popper>
    </>
  );
};

export const Select = forwardRef(SelectComponent) as <T>(
  props: SelectExtraProps<T> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement;
