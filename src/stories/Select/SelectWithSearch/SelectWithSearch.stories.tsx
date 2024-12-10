import type { Meta, StoryObj } from "@storybook/react";
import { SelectWithSearch as SelectComponent } from "../../../components";
import { Option } from "../../../components/Select/types.ts";
import { useMemo, useState } from "react";

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

const MySelectComponent = ({
  selectedValue,
  onSelect,
}: {
  selectedValue: string;
  onSelect: (value: string) => string;
}) => {
  const [search, setSearch] = useState("");

  const filteredOptions = useMemo(() => {
    if (!search) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <SelectComponent
      options={filteredOptions}
      value={search}
      onChange={setSearch}
      selectedValue={selectedValue}
      onSelect={onSelect}
    />
  );
};

const meta = {
  title: "Example/Select/SelectWithSearch",
  component: MySelectComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "standard",
  },
  argTypes: {
    selectedValue: {
      control: { disable: true },
    },
  },
  args: {
    onSelect: (value: string) => value,
    selectedValue: "",
  },
} satisfies Meta<typeof MySelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectWithSearch: Story = {};
