import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";
import { heightOptions, themeOptions } from "../../config";

type Story = StoryObj<typeof Spinner>;

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  args: {
    height: "md",
  },
} satisfies Meta<typeof Spinner>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div className="flex gap-4">
        {heightOptions.map((option) => (
          <Spinner height={option} key={option} theme={args.theme} />
        ))}
      </div>
    );
  },
};

export const Themes: Story = {
  render: (args) => {
    return (
      <div className="flex gap-4">
        {themeOptions.map((option) => (
          <Spinner height={args.height} theme={option} key={option} />
        ))}
      </div>
    );
  },
};

export default meta;
