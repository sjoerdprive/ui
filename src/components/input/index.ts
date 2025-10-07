import { Affix } from "./affix";
export { inputClassVariants } from "./class-variants";
import { Input as InputComponent } from "./input";
import { Group } from "./input-group";
export type { InputStyles } from "./types";

export const Input = Object.assign(InputComponent, {
  Group,
  Affix,
});
