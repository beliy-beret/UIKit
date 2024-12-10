import type { Meta, StoryObj } from "@storybook/react";

import { Badge as Component } from "../../../components";

const meta = {
  title: "Example/Badges/Badge",
  component: Component,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  args: {
    children: "Badge label",
  },
};
