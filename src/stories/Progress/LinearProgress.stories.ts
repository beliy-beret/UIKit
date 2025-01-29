import type { Meta, StoryObj } from "@storybook/react";
import { LinearProgress } from "../../components";

const meta = {
  title: "Example/Progress/LinearProgress",
  component: LinearProgress,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: {
    status: 60,
  },
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progress: Story = {};
