import { Button } from "./button";
import { Group } from "./button-group";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./group-input";

type Story = StoryObj<typeof Button>;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    height: "md",
    theme: "primary",
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export const Default: Story = {};

export const AsGroup: Story = {
  render: (args) => (
    <Group>
      <Button {...args}>Main action</Button>
      <Button {...args}>v</Button>
    </Group>
  ),
};

export const AsRadioGroup: Story = {
  render: (args) => (
    <Group>
      <Input
        name="radio"
        height={args.height}
        theme={args.theme}
        multiple={false}
      >
        Option 1
      </Input>
      <Input
        name="radio"
        height={args.height}
        theme={args.theme}
        multiple={false}
      >
        Option 2
      </Input>
      <Input
        name="radio"
        height={args.height}
        theme={args.theme}
        multiple={false}
      >
        Option 3
      </Input>
    </Group>
  ),
};

export default meta;
