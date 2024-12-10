import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "../../components";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: "Placeholder text",
  },
};

export const WithErrorInput: Story = {
  args: {
    error: true,
    placeholder: "Placeholder text",
  },
};
