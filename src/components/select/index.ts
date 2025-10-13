import { Option } from "./option";
import { Placeholder } from "./placeholder";
import { Select as SelectComponent } from "./select";

export type { SelectExtraProps } from "./types";
export { useSelect } from "./use-select";

export const Select = Object.assign(SelectComponent, {
  Placeholder,
  Option,
});
