import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../../components";

const meta = {
  title: "Example/Typography/H3",
  component: Typography.H3,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Typography.H3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H3_Light: Story = {
  args: {
    fontWidth: "Light",
    children: "H3 Title light width",
  },
};
export const H3_Regular: Story = {
  args: {
    fontWidth: "Regular",
    children: "H3 Title regular width",
  },
};
export const H3_Medium: Story = {
  args: {
    fontWidth: "Medium",
    children: "H3 Title medium width",
  },
};
export const H3_Bold: Story = {
  args: {
    fontWidth: "Bold",
    children: "H3 Title bold width",
  },
};
