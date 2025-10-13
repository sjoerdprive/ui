import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./pill";
import { Button } from "../button";

type Story = StoryObj<typeof Pill>;

const meta = {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "border"],
    },
  },
  args: {
    height: "md",
    theme: "primary",
    children: "Pill",
  },
} satisfies Meta<typeof Pill>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    children: <FontAwesomeIcon className="text-inherit" icon={faPencilAlt} />,
  },
};

export const WithButton: Story = {
  render: (args) => (
    <Pill {...args} className="gap-2">
      Pill
      <Button height="xs" square>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </Pill>
  ),
};

export default meta;
