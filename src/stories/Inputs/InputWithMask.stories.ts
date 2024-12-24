import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { InputWithMask as Component } from "../../components";

const meta = {
  title: "Example/Inputs/InputWithMask",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { value: "", onChangeValue: fn() },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithMask: Story = {};

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
  args: { value: "9997778844" },
};

export const WithDisabledValue: Story = {
  args: { value: "9997778844", disabled: true },
};
