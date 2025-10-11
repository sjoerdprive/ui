import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ForwardedRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { useKey } from "../../hooks/use-key";
import { classnames } from "../../utils";
import { Input } from "../input";
import { inputClassVariants } from "../input/class-variants";
import { Spinner } from "../spinner";
import { Dropdown } from "./dropdown";
import { useListbox } from "./hooks/use-listbox";
import { useSelect } from "./hooks/use-select";
import { Listbox } from "./listbox";
import { Option } from "./option";
import type { SelectExtraProps } from "./types";
import { useClickOutside } from "../../hooks/use-click-outside";

const SelectComponent = <T,>(
  {
    height,
    className,
    options,
    value,
    multiple,
    name,
    placeholder,
    isPending,
    onQuery,
    onChange,
    identifier,
    renderOption,
    renderValue,
    ...buttonProps
  }: SelectExtraProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const comboboxRef = useRef<HTMLInputElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const listBoxId = useId();

  const showOptions = useMemo(
    () => !buttonProps.disabled && isExpanded,
    [buttonProps.disabled, isExpanded]
  );

  const {
    renderOptionContent,
    getId,
    isSelected,
    cachedOptions,
    renderedValueContent,
  } = useSelect({
    options,
    value,
    placeholder,
    identifier,
    renderOption,
    renderValue,
  });

  const scrollToIndex = useCallback(
    (index: number) => {
      if (listboxRef.current) {
        const idToFocus = `${listBoxId}__${index}`;
        const element = listboxRef.current.querySelector(`#${idToFocus}`);
        element?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    },
    [listBoxId, listboxRef]
  );

  const [focusIndex, reset] = useListbox(
    cachedOptions,
    listboxRef,
    scrollToIndex
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      setIsExpanded(!!multiple);
    },
    [onChange, multiple]
  );

  const focusCombobox = useCallback(() => {
    if (!onQuery) return;

    setTimeout(() => {
      comboboxRef.current?.focus();
    }, 0);
  }, [onQuery]);

  const handleOpen = useCallback(() => {
    setIsExpanded(true);
    focusCombobox();
  }, [focusCombobox]);

  const handleClose = useCallback(() => {
    if (!isExpanded) return;

    onQuery?.("");
    reset();
    setIsExpanded(false);
    buttonRef.current?.focus();
  }, [isExpanded, onQuery, reset]);

  const handleQuery = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      await onQuery?.(query);
    },
    [onQuery]
  );

  useClickOutside([dropdownRef, buttonRef], handleClose);
  useKey("Escape", handleClose);
  useKey("Tab", handleClose);
  useKey("ArrowLeft", focusCombobox);
  useKey("ArrowRight", focusCombobox);

  useKey("Enter", () => {
    document.getElementById(`${listBoxId}__${focusIndex}`)?.click();
  });
  useKey("Space", () => {
    document.getElementById(`${listBoxId}__${focusIndex}`)?.click();
  });

  return (
    <>
      <button
        className={twMerge(
          inputClassVariants({
            height,
            className: classnames("text-start", className),
          })
        )}
        onClick={() => handleOpen()}
        aria-haspopup="listbox"
        aria-expanded={isExpanded}
        aria-controls={listBoxId}
        type="button"
        ref={buttonRef}
        {...buttonProps}
      >
        <div className="grow overflow-hidden flex flex-nowrap whitespace-nowrap">
          {renderedValueContent}
        </div>
        <FontAwesomeIcon
          className="text-gray-400 ml-auto pl-3"
          icon={showOptions ? faChevronUp : faChevronDown}
        />
      </button>

      <Dropdown
        isVisible={showOptions}
        anchor={buttonRef}
        ref={dropdownRef}
        zIndex={120}
        className="flex flex-col"
      >
        {onQuery && (
          <div className="px-3 py-3 border-b border-gray-200 flex flex-col bg-white">
            <Input.Group>
              <input
                ref={comboboxRef}
                role="combobox"
                className="px-3 min-w-0"
                aria-owns={listBoxId}
                aria-expanded={isExpanded}
                onChange={handleQuery}
                onFocus={reset}
              />
              <Input.Affix className="aspect-square h-full">
                {isPending && <Spinner theme="primary" height="md" />}
              </Input.Affix>
            </Input.Group>
          </div>
        )}
        <Listbox
          id={listBoxId}
          aria-activedescendant={`${listBoxId}__${focusIndex}`}
          ref={listboxRef}
        >
          {cachedOptions?.map((option, index) => {
            const optionId = getId(option);
            const isChecked = isSelected(option);

            return (
              <Option
                key={optionId}
                id={`${listBoxId}__${index}`}
                ref={ref}
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={optionId}
                checked={isChecked}
                hasFocus={index === focusIndex}
                onChange={handleChange}
              >
                {renderOptionContent(option as T & T[])}
              </Option>
            );
          })}
        </Listbox>
      </Dropdown>
    </>
  );
};

export const Select = forwardRef(SelectComponent) as <T>(
  props: SelectExtraProps<T> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement;
