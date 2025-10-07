import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from ".";
import { useState } from "react";
import { Button } from "../button";
import { Popper } from "../popper";

type Story = StoryObj<typeof Dialog>;

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  args: {},
} satisfies Meta<typeof Dialog>;

export const Default: Story = {};

export const AsPrefab: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div>
        <Button theme="primary" onClick={() => setIsExpanded(true)}>
          Open
        </Button>

        <Dialog
          title="Dialog title"
          isVisible={isExpanded}
          onClose={() => setIsExpanded(false)}
        >
          <Dialog.Main>Hello</Dialog.Main>
        </Dialog>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div>
        <Button theme="primary" onClick={() => setIsExpanded(true)}>
          Open
        </Button>

        <Dialog
          title="Dialog title"
          isVisible={isExpanded}
          onClose={() => setIsExpanded(false)}
        >
          <Dialog.Main>Hello</Dialog.Main>
          <Dialog.Footer>
            <Button onClick={() => setIsExpanded(false)}>Cancel</Button>
            <Button theme="primary" onClick={() => setIsExpanded(false)}>
              Save
            </Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  },
};

export const Composed: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div>
        <Button theme="primary" onClick={() => setIsExpanded(true)}>
          Open
        </Button>

        <Popper isVisible={isExpanded}>
          <Dialog.Backdrop onClick={() => setIsExpanded(false)} />
          <Dialog.Center>
            <Dialog.Body>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Main>
                <p>This is the main content of the dialog.</p>
              </Dialog.Main>
              <Dialog.Footer>
                <Button onClick={() => setIsExpanded(false)}>Cancel</Button>
                <Button theme="primary" onClick={() => setIsExpanded(false)}>
                  Save
                </Button>
              </Dialog.Footer>
            </Dialog.Body>
          </Dialog.Center>
        </Popper>
      </div>
    );
  },
};

export default meta;
