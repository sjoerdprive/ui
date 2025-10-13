import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./textarea";

type Story = StoryObj<typeof TextArea>;

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  args: {
    height: "md",
  },
} satisfies Meta<typeof TextArea>;

export const Default: Story = {};

export default meta;
