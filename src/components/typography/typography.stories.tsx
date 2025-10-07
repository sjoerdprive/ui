import type { Meta, StoryObj } from "@storybook/react";
import { typographyOptions } from "./types";
import { Typography } from "./typography";

type Story = StoryObj<typeof Typography>;

const meta = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    as: {
      control: "select",
      options: typographyOptions,
    },
  },
  args: {
    children: "The quick brown fox etc.",
  },
} satisfies Meta<typeof Typography>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="flex flex-col">
        {typographyOptions.map((option) => (
          <Typography as={option}>Typography size {option}</Typography>
        ))}
      </div>
    );
  },
};

export const Prose: Story = {
  render: () => {
    return (
      <div className="max-w-prose">
        <Typography as="h1">Title lorem</Typography>
        <Typography size="h3">Subtitle Lorem, ipsum dolor.</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum,
          eveniet necessitatibus sint fuga iure velit quaerat ab impedit esse
          veniam tempora voluptatem, minima, nemo est saepe recusandae excepturi
          non praesentium sit enim reprehenderit! Ut culpa tenetur officia
          recusandae qui ab nesciunt alias! Soluta, laboriosam. Facere tempore
          minus similique deserunt officia eligendi delectus fugit voluptate
          earum. Quaerat est, ea natus asperiores obcaecati dolorem autem non
          animi amet repellat quae vel fugit quibusdam quos voluptate quasi
          illum vitae praesentium eligendi tempora!
        </Typography>
      </div>
    );
  },
};

export default meta;
