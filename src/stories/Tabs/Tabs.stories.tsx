import type { Meta, StoryObj } from "@storybook/react";
import { Tabs as TabsComponent } from "../../components";
import { useArgs } from "@storybook/preview-api";
import { Tab } from "../../components/Tabs";

const meta = {
  title: "Example/Tabs",
  component: TabsComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "standard",
  },
  args: {
    list: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
    ],
    selectedTab: { value: "1", label: "One" },
    onSelect: (tab) => tab,
  },
} satisfies Meta<typeof TabsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  render: function Render(args) {
    const [{ selectedTab }, updateArgs] = useArgs();

    function onSelect(tab: Tab) {
      updateArgs({ selectedTab: tab });
    }

    return (
      <TabsComponent {...args} selectedTab={selectedTab} onSelect={onSelect} />
    );
  },
};
