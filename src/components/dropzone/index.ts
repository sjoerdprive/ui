import { Dropzone as DropzoneComponent } from "./dropzone";
import { Preview } from "./file-preview";
import type { FileWithPath } from "react-dropzone";

export const Dropzone = Object.assign(DropzoneComponent, {
  Preview,
});

export type { FileWithPath };
