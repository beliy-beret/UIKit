import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../../components";

const meta = {
  title: "Example/Typography/H2",
  component: Typography.H2,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Typography.H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H2_Light: Story = {
  args: {
    fontWidth: "Light",
    children: "H2 Title light width",
  },
};
export const H2_Regular: Story = {
  args: {
    fontWidth: "Regular",
    children: "H2 Title regular width",
  },
};
export const H2_Medium: Story = {
  args: {
    fontWidth: "Medium",
    children: "H2 Title medium width",
  },
};
export const H2_Bold: Story = {
  args: {
    fontWidth: "Bold",
    children: "H2 Title bold width",
  },
};
