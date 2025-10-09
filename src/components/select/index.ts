import { Select as SelectComponent } from "./select";
import { Placeholder } from "./placeholder";
import { Listbox } from "./listbox";
import { Option } from "./option";
import { Dropdown } from "./dropdown";

export type { SelectExtraProps } from "./types";
export { useSelect } from "./hooks/use-select";
export { useListbox } from "./hooks/use-listbox";

export const Select = Object.assign(SelectComponent, {
  Placeholder,
  Listbox,
  Option,
  Dropdown,
});
