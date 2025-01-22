import type { Meta, StoryObj } from "@storybook/react";

import { Spinner as Component } from "../../components";

const meta = {
  title: "Example/Spinner",
  component: Component,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
