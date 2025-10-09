import type { Meta, StoryObj } from "@storybook/react";
import { FormPage } from "./form";

type Story = StoryObj<typeof FormPage>;

const meta = {
  title: "Pages/FormPage",
  component: FormPage,
  args: {
    label: "FormPage",
  },
} satisfies Meta<typeof FormPage>;

export const Default: Story = {};

export default meta;
