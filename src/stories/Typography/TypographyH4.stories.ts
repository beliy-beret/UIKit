import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../../components";

const meta = {
  title: "Example/Typography/H4",
  component: Typography.H4,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Typography.H4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H4_Light: Story = {
  args: {
    fontWidth: "Light",
    children: "H4 Title light width",
  },
};
export const H4_Regular: Story = {
  args: {
    fontWidth: "Regular",
    children: "H4 Title regular width",
  },
};
export const H4_Medium: Story = {
  args: {
    fontWidth: "Medium",
    children: "H4 Title medium width",
  },
};
export const H4_Bold: Story = {
  args: {
    fontWidth: "Bold",
    children: "H4 Title bold width",
  },
};
