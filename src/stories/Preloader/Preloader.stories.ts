import type { Meta, StoryObj } from "@storybook/react";

import { Preloader as Component } from "../../components";

const meta = {
  title: "Example/Preloader",
  component: Component,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};
