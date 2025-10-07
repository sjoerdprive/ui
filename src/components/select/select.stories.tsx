import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import { useForm } from "react-hook-form";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Placeholder } from "./placeholder";

const stringOptions = ["Option 1", "Option 2", "Option 3"];
const complexOptions = [
  { id: "1", label: "Option A" },
  { id: "2", label: "Option B" },
  { id: "3", label: "Option C" },
];

type Story = StoryObj<typeof Select>;

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    height: "md",
    disabled: false,
    options: stringOptions,
    className: "w-48",
    placeholder: "Select an option",
  },
} satisfies Meta<typeof Select>;

export const Default: Story = {};

export const SimpleOptions: Story = {
  render: (args) => {
    const { register, watch, reset } = useForm({
      values: {
        select1: "1",
        select2: "2",
      },
    });

    return (
      <div className="flex flex-col gap-4">
        <Select
          options={stringOptions}
          height={args.height}
          disabled={args.disabled}
          value={watch("select1")}
          {...register("select1")}
        />
        <Select
          options={stringOptions}
          height={args.height}
          disabled={args.disabled}
          value={watch("select2")}
          {...register("select2")}
        />

        <Button theme="primary" onClick={() => reset()}>
          Clear values
        </Button>
      </div>
    );
  },
};

export const ComplexOptions: Story = {
  args: {},
  render: (args) => {
    const { register, watch, reset } = useForm({
      values: {
        complexSelect1: ["1", "3"],
        complexSelect2: ["2"],
        complexSelect3: "1",
      },
    });

    return (
      <div className="flex flex-col gap-4">
        <Select
          height={args.height}
          disabled={args.disabled}
          options={complexOptions}
          identifier={(option) => option.id}
          renderValue={(values) =>
            values?.map((value) => value.label).join(" & ")
          }
          multiple
          value={watch("complexSelect1")}
          {...register("complexSelect1")}
        />

        <Select
          height={args.height}
          disabled={args.disabled}
          options={complexOptions}
          identifier={(option) => option.id}
          multiple
          value={watch("complexSelect2")}
          {...register("complexSelect2")}
        />

        <Select
          height={args.height}
          disabled={args.disabled}
          options={complexOptions}
          identifier={(option) => option.id}
          renderValue={(value) => value.label}
          value={watch("complexSelect3")}
          {...register("complexSelect3")}
        />

        <Button theme="primary" onClick={() => reset()}>
          Clear values
        </Button>
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  render: (args) => {
    const { register, watch, reset } = useForm({
      values: {
        select1: "1",
        select2: "2",
        select3: "3",
      },
    });

    return (
      <div className="flex flex-col gap-4 max-w-100">
        <Select
          height={args.height}
          disabled={args.disabled}
          options={stringOptions}
          placeholder="Simple placeholder"
          value={watch("select1")}
          {...register("select1")}
        />

        <Select
          height={args.height}
          disabled={args.disabled}
          options={stringOptions}
          placeholder={
            <span className="flex items-baseline gap-1">
              <FontAwesomeIcon icon={faQuestion} className="text-sm" /> Custom
              placeholder
            </span>
          }
          value={watch("select2")}
          {...register("select2")}
        />

        <Select
          height={args.height}
          disabled={args.disabled}
          options={stringOptions}
          placeholder={
            <Placeholder>
              <FontAwesomeIcon icon={faQuestion} className="text-sm" /> Custom
              placeholder using Select.Placeholder component
            </Placeholder>
          }
          value={watch("select3")}
          {...register("select3")}
        />

        <Button theme="primary" onClick={() => reset()}>
          Clear values
        </Button>
      </div>
    );
  },
};

export default meta;
