import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react";
import { Affix } from "./affix";
import { Input } from "./input";
import { Group } from "./input-group";

type Story = StoryObj<typeof Input>;

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    height: "md",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export const Default: Story = {};

export const InputGroup: Story = {
  render: (args) => (
    <Group height={args.height}>
      <Affix>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Affix>
      <input className="grow" disabled={args.disabled} type="search" />
      <Affix>
        <FontAwesomeIcon icon={faChevronDown} />
      </Affix>
    </Group>
  ),
};

export default meta;
