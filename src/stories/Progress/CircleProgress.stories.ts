import type { Meta, StoryObj } from "@storybook/react";
import { CircleProgress } from "../../components";

const meta = {
  title: "Example/Progress/CircleProgress",
  component: CircleProgress,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: {
    label: "Label",
    status: 60,
  },
} satisfies Meta<typeof CircleProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XXS: Story = {
  args: {
    size: "xxs",
  },
};

export const XS: Story = {
  args: {
    size: "xs",
  },
};

export const SM: Story = {
  args: {
    size: "sm",
  },
};

export const MD: Story = {
  args: {
    size: "md",
  },
};

export const LG: Story = {
  args: {
    size: "lg",
  },
};
