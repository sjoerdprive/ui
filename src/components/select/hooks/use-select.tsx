import { useCallback, useMemo } from "react";
import { Placeholder } from "../placeholder";

interface UseSelectParameters<T> {
  options: T[];
  value?: string | number | (string | number)[] | null;
  identifier?: (value: T) => string;
  renderValue?: (value: T & T[]) => React.ReactNode;
  renderOption?: (value: T) => React.ReactNode;
  placeholder?: React.ReactNode;
}

export const useSelect = <T,>({
  options,
  value,
  identifier,
  renderValue,
  renderOption,
  placeholder,
}: UseSelectParameters<T>) => {
  const getId = useCallback(
    (option: T) => {
      return identifier ? identifier(option) : (option as unknown as string);
    },
    [identifier]
  );

  const optionsMap = useMemo(
    () =>
      new Map<string | number, T>(
        options.map((option) => [getId(option), option])
      ),
    [options, getId]
  );

  const isSelected = useCallback(
    (option: T) => {
      return Array.isArray(value)
        ? value.includes(getId(option))
        : value === getId(option);
    },
    [value, getId]
  );

  const selectedValue = useMemo(() => {
    if (!value) {
      return null;
    }

    if (Array.isArray(value)) {
      return value.map((val) => optionsMap.get(val)) as T[];
    }

    return optionsMap.get(value) as T;
  }, [optionsMap, value]);

  const renderOptionContent = useCallback(
    (option: T) => (renderOption ? renderOption(option) : getId(option)),
    [renderOption, getId]
  );

  const defaultArrayRenderer = useCallback(
    (val: T[]) => {
      const valuesArray = val.map((v) => renderOptionContent(v));
      const isStringArray = valuesArray.every((v) => typeof v === "string");
      //   identifiers are required and exclusive to complex selects
      return isStringArray ? valuesArray.join(", ") : valuesArray;
    },
    [renderOptionContent]
  );

  const renderValueContent = useCallback(
    (val: T | T[]) => {
      if (!val) {
        return "";
      }

      return renderValue
        ? renderValue(val as T[] & T)
        : Array.isArray(val)
        ? defaultArrayRenderer(val)
        : renderOptionContent(val);
    },
    [renderValue, renderOptionContent, defaultArrayRenderer]
  );

  const renderedValueContent = useMemo(() => {
    const hasValue = Array.isArray(selectedValue)
      ? selectedValue.length > 0
      : !!selectedValue;

    if (!hasValue || !selectedValue) {
      return typeof placeholder === "string" ? (
        <Placeholder>{placeholder}</Placeholder>
      ) : (
        placeholder
      );
    }

    return renderValueContent(selectedValue);
  }, [selectedValue, renderValueContent, placeholder]);

  return {
    selectedValue,
    renderedValueContent,
    renderOptionContent,
    renderValueContent,
    isSelected,
    getId,
  };
};
