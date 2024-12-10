import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button as Component } from "../../components";

const meta = {
  title: "Example/Button",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { onClick: fn(), children: "Button component" },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {};

export const DisabledButton: Story = {
  args: {
    disabled: true,
  },
};
