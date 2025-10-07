import { Button } from "./button";
import { Group } from "./button-group";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./group-input";
import type { ComponentProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Story = StoryObj<typeof Button>;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    height: "md",
    disabled: false,
    theme: "primary",
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export const Default: Story = {};

export const AsGroup: Story = {
  render: (args) => (
    <Group>
      <Button {...args}>Main action</Button>
      <Button {...args} square>
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
    </Group>
  ),
};

export const AsRadioGroup: Story = {
  render: (args) => (
    <Group>
      <Input name="radio" {...(args as ComponentProps<typeof Input>)}>
        Option 1
      </Input>
      <Input name="radio" {...(args as ComponentProps<typeof Input>)}>
        Option 2
      </Input>
      <Input name="radio" {...(args as ComponentProps<typeof Input>)}>
        Option 3
      </Input>
    </Group>
  ),
};

export const Pending: Story = {
  args: {
    isPending: true,
    children: "Loading...",
  },
};

export default meta;
