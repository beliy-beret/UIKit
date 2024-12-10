import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { MultipleSelect as SelectComponent } from "../../../components";
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
  title: "Example/Select/MultipleSelect",
  component: SelectComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "standard",
  },
  argTypes: {
    options: {
      control: { disable: true },
    },
    selectedValues: {
      control: { disable: true },
    },
    disabledValues: {
      control: { disable: true },
    },
  },
  args: {
    options: options,
    onSelect: (value: string[]) => value,
    selectedValues: ["2", "3"],
    disabledValues: [],
  },
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MultipleSelect: Story = {
  render: function Render(args) {
    const [{ selectedValues }, updateArgs] = useArgs();

    function onChange(values: string[]) {
      updateArgs({ selectedValues: values });
    }

    return (
      <SelectComponent
        {...args}
        selectedValues={selectedValues}
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

export const WithDisabledOptions: Story = {
  args: {
    disabledValues: ["1", "4"],
  },
};
