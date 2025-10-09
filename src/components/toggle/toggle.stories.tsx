import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

type Story = StoryObj<typeof Toggle>;

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  args: {
    label: "Toggle",
  },
} satisfies Meta<typeof Toggle>;

export const Default: Story = {};

export default meta;
