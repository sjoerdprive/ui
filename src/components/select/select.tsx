"use client";
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
import { useKey } from "../../hooks/use-key";
import { classnames } from "../../utils";
import { Dropdown } from "../dropdown";
import { Input } from "../input";
import { inputClassVariants } from "../input/class-variants";
import { Listbox } from "../listbox";
import { Spinner } from "../spinner";
import { Option } from "./option";
import type { SelectExtraProps } from "./types";
import { useSelect } from "./use-select";

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

  const focusCombobox = useCallback(() => {
    if (!onQuery) return;

    queueMicrotask(() => {
      comboboxRef.current?.focus();
    });
  }, [onQuery]);

  const handleOpen = useCallback(() => {
    setIsExpanded(true);
    focusCombobox();
  }, [focusCombobox]);

  const handleClose = useCallback(() => {
    if (!isExpanded) return;

    onQuery?.("");
    setIsExpanded(false);
    buttonRef.current?.focus();
  }, [isExpanded, onQuery]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      if (!multiple) {
        handleClose();
      }
    },
    [onChange, multiple, handleClose]
  );

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
        <div
          tabIndex={-1}
          className="grow overflow-x-auto scrollbar-hide flex flex-nowrap whitespace-nowrap"
        >
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
        className="flex flex-col my-1"
        attachToAnchorParent
      >
        {onQuery && (
          <div className="px-3 py-3 border-b border-gray-200 flex flex-col bg-white">
            <Input.Group className="grow">
              <input
                ref={comboboxRef}
                role="combobox"
                className="px-3 min-w-0 grow"
                aria-controls={listBoxId}
                aria-expanded={isExpanded}
                onChange={handleQuery}
              />
              <Input.Affix className="aspect-square h-full">
                {isPending && <Spinner theme="primary" height="md" />}
              </Input.Affix>
            </Input.Group>
          </div>
        )}
        <Listbox
          id={listBoxId}
          ref={listboxRef}
          options={cachedOptions}
          aria-live="polite"
        >
          {({ getId: getListboxId, isFocused }) =>
            cachedOptions?.map((option, index) => {
              const optionId = getId(option);
              const isChecked = isSelected(option);

              return (
                <Option
                  key={optionId}
                  id={getListboxId(index)}
                  ref={ref}
                  type={multiple ? "checkbox" : "radio"}
                  name={name}
                  value={optionId}
                  checked={isChecked}
                  hasFocus={isFocused(index)}
                  onChange={handleChange}
                >
                  {renderOptionContent(option as T & T[])}
                </Option>
              );
            })
          }
        </Listbox>
      </Dropdown>
    </>
  );
};

export const Select = forwardRef(SelectComponent) as <T>(
  props: SelectExtraProps<T> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement;
