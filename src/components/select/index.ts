import { Option } from "./option";
import { Placeholder } from "./placeholder";
import { Select as SelectComponent } from "./select";

export * from "./types";
export * from "./utils";
export * from "./use-select";


export const Select = Object.assign(SelectComponent, {
  Placeholder,
  Option,
});
