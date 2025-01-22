import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Select as SelectComponent } from "../../../components";
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
  component: SelectComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "standard",
  },
  argTypes: {
    options: {
      control: { disable: true },
    },
    selectedValue: {
      options: ["0", "1", "2", "3", "4", "5", "6", "7"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    options: options,
    onSelect: (value: string) => value,
    selectedValue: "1",
  },
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {
  render: function Render(args) {
    const [{ selectedValue }, updateArgs] = useArgs();

    function onChange(value: string) {
      updateArgs({ selectedValue: value });
    }

    return (
      <SelectComponent
        {...args}
        selectedValue={selectedValue}
        onSelect={onChange}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: true,
  },
};
