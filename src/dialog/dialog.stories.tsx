import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./dialog";
import { useState } from "react";
import { Button } from "../components/button";

type Story = StoryObj<typeof Dialog>;

const meta = {
  title: "Components/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export const Default: Story = {};

export const AsModal: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div>
        <Button theme="primary" onClick={() => setIsExpanded(true)}>
          Open
        </Button>

        <Dialog isVisible={isExpanded} onClose={() => setIsExpanded(false)}>
          Hello
        </Dialog>
      </div>
    );
  },
};

export default meta;
