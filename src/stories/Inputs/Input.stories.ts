import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input as Component } from "../../components";

const meta = {
  title: "Example/Inputs/Input",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {};

export const WithError: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithPlaceholder: Story = {
  args: { placeholder: "Placeholder text" },
};

export const WithValue: Story = {
  args: { value: "Input value" },
};

export const WithDisabledValue: Story = {
  args: { value: "Input value", disabled: true },
};
