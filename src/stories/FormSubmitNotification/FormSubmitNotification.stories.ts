import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FormSubmitNotification as Component } from "../../components";

const meta = {
  title: "Example/FormSubmitNotification",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: { onClose: fn() },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessNotification: Story = {
  args: {
    status: "success",
  },
};

export const RejectNotification: Story = {
  args: {
    status: "reject",
  },
};
