import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Select as Component } from "../../../components";
import { Option } from "../../../components/Select/types.ts";

const options: Option[] = [
  { value: "0", label: "Все" },
  { value: "1", label: "Яблоко" },
  { value: "2", label: "Груша" },
  { value: "3", label: "Вишня" },
  { value: "4", label: "Черешня" },
  { value: "5", label: "арбуз" },
  { value: "6", label: "дыня" },
  { value: "7", label: "апельсин" },
];

const meta = {
  title: "Example/Select/DefaultSelect",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { onSelect: fn(), options: options },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {
    selectedValue: options[0].value,
  },
};
