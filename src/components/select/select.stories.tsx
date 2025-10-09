import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import { useForm } from "react-hook-form";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Placeholder } from "./placeholder";
import { useRef } from "react";
import { Tooltip } from "../tooltip";
import { Typography } from "../typography";

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
        select2: ["2"],
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
          multiple
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
          renderOption={(value) => <Typography>{value.label}</Typography>}
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
    const tooltipRef = useRef(null);
    const { register, watch, reset } = useForm({
      values: {
        select1: null,
        select2: [],
        select3: null,
        select4: null,
        select5: [],
      },
    });

    return (
      <div className="flex flex-col gap-4 max-w-100">
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
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
          multiple
          value={watch("select2")}
          {...register("select2")}
        />

        <Select
          height={args.height}
          disabled={args.disabled}
          options={stringOptions}
          placeholder={
            <Placeholder className="flex gap-2 items-baseline">
              Custom Select.Placeholder
              <FontAwesomeIcon
                ref={tooltipRef}
                icon={faQuestionCircle}
                className="text-sm"
              />{" "}
              <Tooltip anchor={tooltipRef}>
                <Tooltip.Content>
                  This is a tooltip on the placeholder icon.
                </Tooltip.Content>
              </Tooltip>
            </Placeholder>
          }
          value={watch("select3")}
          {...register("select3")}
        />

        <Select
          height={args.height}
          disabled={args.disabled}
          options={complexOptions}
          identifier={(option) => option.id}
          renderOption={(option) => option.label}
          placeholder={
            <Placeholder className="flex gap-2 items-baseline">
              Custom Select.Placeholder
            </Placeholder>
          }
          value={watch("select4")}
          {...register("select4")}
        />

        <Select
          height={args.height}
          disabled={args.disabled}
          options={complexOptions}
          identifier={(option) => option.id}
          renderOption={(option) => option.label}
          placeholder={
            <Placeholder className="flex gap-2 items-baseline">
              Custom Select.Placeholder
            </Placeholder>
          }
          multiple
          value={watch("select5")}
          {...register("select5")}
        />

        <Button theme="primary" onClick={() => reset()}>
          Clear values
        </Button>
      </div>
    );
  },
};

export default meta;
