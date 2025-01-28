import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Switch as Component } from "../../components";

const meta = {
  title: "Example/Switch",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { onChange: fn(), checked: false },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnChecked: Story = {
  args: {
    value: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisableWithChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const BigUnChecked: Story = {
  args: {
    size: "big",
  },
};

export const BigChecked: Story = {
  args: {
    checked: true,
    size: "big",
  },
};

export const BigDisabled: Story = {
  args: {
    disabled: true,
    size: "big",
  },
};

export const BigDisableWithChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    size: "big",
  },
};
