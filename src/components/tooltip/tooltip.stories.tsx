import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { Tooltip } from ".";
import { Typography } from "../typography";

type Story = StoryObj<typeof Tooltip>;

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {},
} satisfies Meta<typeof Tooltip>;

export const Default: Story = {
  render: (args) => {
    const ref = useRef(null);

    return (
      <>
        <Tooltip anchor={ref}>More info</Tooltip>
        <FontAwesomeIcon icon={faInfoCircle} ref={ref} />
      </>
    );
  },
};

export const CustomContent: Story = {
  render: (args) => {
    const ref = useRef(null);

    return (
      <>
        <Tooltip anchor={ref}>
          <Tooltip.Content className="bg-primary-500">
            <Typography as="h4">Tooltip Title</Typography>
            <p className="text-sm">This is some more info about the tooltip.</p>
          </Tooltip.Content>
        </Tooltip>
        <FontAwesomeIcon icon={faInfoCircle} ref={ref} />
      </>
    );
  },
};

export default meta;
