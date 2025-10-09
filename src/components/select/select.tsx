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
  type ForwardedRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { useClickOutside } from "../../hooks/use-click-outside";
import { useScroll } from "../../hooks/use-scroll";
import { classnames } from "../../utils";
import { inputClassVariants } from "../input/class-variants";
import { useSelect } from "./hooks/use-select";
import { Listbox } from "./listbox";
import { Option } from "./option";
import type { SelectExtraProps } from "./types";

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
  const listboxRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const listBoxId = useId();

  useClickOutside([listboxRef, buttonRef, ...(parents ?? [])], () =>
    setIsExpanded(false)
  );
  useScroll(() => setIsExpanded(false));

  const showOptions = useMemo(
    () => !buttonProps.disabled && isExpanded,
    [buttonProps.disabled, isExpanded]
  );

  const { renderOptionContent, getId, isSelected, renderedValueContent } =
    useSelect({
      options,
      value,
      placeholder,
      identifier,
      renderOption,
      renderValue,
    });

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
        <div className="grow overflow-hidden flex">{renderedValueContent}</div>
        <FontAwesomeIcon
          className="text-gray-400 ml-auto pl-3"
          icon={showOptions ? faChevronUp : faChevronDown}
        />
      </button>

      <Listbox
        id={listBoxId}
        isVisible={showOptions}
        ref={listboxRef}
        anchor={buttonRef}
      >
        {options?.map((option) => {
          const optionId = getId(option);
          const isChecked = isSelected(option);

          return (
            <Option
              ref={ref}
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={optionId}
              checked={isChecked}
              onChange={handleChange}
            >
              {renderOptionContent(option as T & T[])}
            </Option>
          );
        })}
      </Listbox>
    </>
  );
};

export const Select = forwardRef(SelectComponent) as <T>(
  props: SelectExtraProps<T> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement;
