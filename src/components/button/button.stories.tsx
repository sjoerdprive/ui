import { faker } from "@faker-js/faker";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState, type ComponentProps } from "react";
import { Dropdown } from "../dropdown";
import { Button } from "./button";
import { Group } from "./button-group";
import { Input } from "./group-input";
import { Listbox } from "../listbox";

type Story = StoryObj<typeof Button>;

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "border"],
    },
  },
  args: {
    height: "md",
    disabled: false,
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Button <FontAwesomeIcon icon={faTimes} />
      </>
    ),
  },
};

export const AsGroup: Story = {
  render: (args) => {
    const groupRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const menuItems = new Array(5)
      .fill(null)
      .map(() => faker.internet.userAgent());

    return (
      <Group ref={groupRef}>
        <Button {...args}>Main action</Button>
        <Button {...args} square onClick={() => setIsExpanded(!isExpanded)}>
          <FontAwesomeIcon icon={faChevronDown} />
          <Dropdown isVisible={isExpanded} anchor={groupRef} className="w-fit">
            <Listbox role="menu" options={menuItems}>
              {({ getId, isFocused }) => {
                return menuItems.map((item, index) => (
                  <Button
                    id={getId(index)}
                    theme={isFocused(index) ? "primary" : "secondary"}
                    key={item}
                  >
                    {item}
                  </Button>
                ));
              }}
            </Listbox>
          </Dropdown>
        </Button>
      </Group>
    );
  },
};

export const AsRadioGroup: Story = {
  render: (args) => (
    <Group>
      <Input name="radio" {...(args as ComponentProps<typeof Input>)}>
        Option 1
      </Input>
      <Input name="radio" {...(args as ComponentProps<typeof Input>)}>
        Option 2
      </Input>
      <Input name="radio" {...(args as ComponentProps<typeof Input>)}>
        Option 3
      </Input>
    </Group>
  ),
};

export const Pending: Story = {
  args: {
    isPending: true,
    children: "Loading...",
  },
};

export default meta;
