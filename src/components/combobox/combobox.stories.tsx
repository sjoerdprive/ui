import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { Combobox } from "./combobox";

type Story = StoryObj<typeof Combobox>;

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  args: {},
} satisfies Meta<typeof Combobox>;

export const Default: Story = {
  render: (args) => {
    const ref = useRef(null);

    return <Combobox />;
  },
};

export default meta;
