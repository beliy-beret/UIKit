import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../../components";

const meta = {
  title: "Example/Typography/H5",
  component: Typography.H5,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof Typography.H5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H5_Light: Story = {
  args: {
    fontWidth: "Light",
    children: "H5 Title light width",
  },
};
export const H5_Regular: Story = {
  args: {
    fontWidth: "Regular",
    children: "H5 Title regular width",
  },
};
export const H5_Medium: Story = {
  args: {
    fontWidth: "Medium",
    children: "H5 Title medium width",
  },
};
export const H5_Bold: Story = {
  args: {
    fontWidth: "Bold",
    children: "H5 Title bold width",
  },
};
