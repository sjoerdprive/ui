import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone } from "./dropzone";

type Story = StoryObj<typeof Dropzone>;

const meta = {
  title: "Components/Dropzone",
  component: Dropzone,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dropzone>;

export const Default: Story = {};

export default meta;
