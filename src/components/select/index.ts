import { Select as SelectComponent } from "./select";
import { Placeholder } from "./placeholder";
import { Listbox } from "./listbox";
import { Option } from "./option";

export type { SelectExtraProps } from "./types";
export { useSelect } from "./hooks/use-select";

export const Select = Object.assign(SelectComponent, {
  Placeholder,
  Listbox,
  Option,
});
