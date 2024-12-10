import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CheckBox as Component } from "../../components";

const meta = {
  title: "Example/Checkbox",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { onToggleChecked: fn(), checked: false },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnChecked: Story = {
  args: {
    id: "unChecked",
  },
};

export const Checked: Story = {
  args: {
    id: "checked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    disabled: true,
  },
};

export const DisableWithChecked: Story = {
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true,
  },
};
