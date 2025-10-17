import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../typography";
import { Alert } from "./alert";
import { Button } from "../button";

type Story = StoryObj<typeof Alert>;

const meta = {
  title: "Components/Alert",
  component: Alert,
  args: {
    theme: "primary",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tenetur.",
  },
} satisfies Meta<typeof Alert>;

export const Default: Story = {};

export const Simple: Story = {
  args: {
    children: (
      <>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        <Typography>Lorem Ipsum dolor sit amet</Typography>
      </>
    ),
  },
};

export const Multiline: Story = {
  args: {
    children: (
      <>
        <FontAwesomeIcon className="mb-auto" icon={faInfoCircle} />

        <div className="flex flex-col gap-2">
          <Typography size="h5">Lorem Ipsum</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Ab, tenetur. Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            <br />
            elit. Ab, tenetur. Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Ab, tenetur.
          </Typography>

          <div className="flex gap-2 mt-2">
            <Button variant="solid">Action 1</Button>
            <Button variant="border">Action 2</Button>
          </div>
        </div>
      </>
    ),
  },
};

export default meta;
