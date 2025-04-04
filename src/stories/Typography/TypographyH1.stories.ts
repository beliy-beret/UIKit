import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../../components";

const meta = {
  title: "Example/Typography/H1",
  component: Typography.H1,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Typography.H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1_Light: Story = {
  args: {
    fontWidth: "Light",
    children: "H1 Title light width",
  },
};
export const H1_Regular: Story = {
  args: {
    fontWidth: "Regular",
    children: "H1 Title regular width",
  },
};
export const H1_Medium: Story = {
  args: {
    fontWidth: "Medium",
    children: "H1 Title medium width",
  },
};
export const H1_Bold: Story = {
  args: {
    fontWidth: "Bold",
    children: "H1 Title bold width",
  },
};
