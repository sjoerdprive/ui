"use client";
import {
  useEffect,
  useRef,
  type ComponentProps,
  type Ref,
} from "react";
import { type InputStyles } from "../input";
import { textAreaClassVariants } from "./class-variants";
import { useCombinedRefs } from "../../hooks/use-combined-refs";

export interface TextAreaProps extends ComponentProps<"textarea">, InputStyles {
  autosize?: boolean;
  maxHeight?: number;
  ref?: Ref<HTMLTextAreaElement>;
}

export const TextArea = ({
  className,
  height,
  autosize = true,
  maxHeight = 300,
  style,
  ref,
  ...textareaProps
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRefs(ref, textareaRef);

  const handleAutosize = () => {
    if (!autosize) return;
    const target = combinedRef?.current as HTMLTextAreaElement;
    target.style.height = "0px";
    const scrollHeight = target.scrollHeight;
    target.style.height = scrollHeight + "px";
  };

  useEffect(() => {
    if (!autosize || !combinedRef?.current) return;
    handleAutosize();
  });

  return (
    <textarea
      onInput={handleAutosize}
      ref={combinedRef}
      style={{ maxHeight, minHeight: !height ? 124 : "unset", ...style }}
      className={textAreaClassVariants({
        height,
        className,
      })}
      {...textareaProps}
    />
  );
};
