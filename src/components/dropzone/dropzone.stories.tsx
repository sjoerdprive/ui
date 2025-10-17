import type { Meta, StoryObj } from "@storybook/react";
import type { FileWithPath } from "react-dropzone";
import { useForm } from "react-hook-form";
import { Dropzone } from "./dropzone";

type Story = StoryObj<typeof Dropzone>;

const meta = {
  title: "Components/Dropzone",
  component: Dropzone,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "avatar"],
      defaultValue: "default",
    },
  },
  args: {
    placeholder: "Drop files here",
  },
} satisfies Meta<typeof Dropzone>;

export const Default: Story = {
  render: (args) => {
    const { register, watch, setValue } = useForm({
      values: {
        files: [] as FileWithPath[],
      },
    });
    return (
      <div className="flex gap-4 w-200 flex-col">
        <Dropzone
          {...args}
          {...register("files")}
          value={watch("files")}
          onChange={(files: FileWithPath[]) => setValue("files", files)}
        />
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    );
  },
};

export default meta;
