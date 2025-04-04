import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../../components";

const meta = {
  title: "Example/Typography/H6",
  component: Typography.H6,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Typography.H6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H6_Light: Story = {
  args: {
    fontWidth: "Light",
    children: "H6 Title light width",
  },
};
export const H6_Regular: Story = {
  args: {
    fontWidth: "Regular",
    children: "H6 Title regular width",
  },
};
export const H6_Medium: Story = {
  args: {
    fontWidth: "Medium",
    children: "H6 Title medium width",
  },
};
export const H6_Bold: Story = {
  args: {
    fontWidth: "Bold",
    children: "H6 Title bold width",
  },
};
