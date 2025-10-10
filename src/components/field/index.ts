import { Error } from "./error";
import { Field as FieldComponent } from "./field";
import { Label } from "./label";

export const Field = Object.assign(FieldComponent, {
  Label,
  Error,
});
