import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CheckBox as Component } from "../../components";

const meta = {
  title: "Example/Checkbox",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {
    size: {
      options: ["small", "big"],
      control: {
        type: "radio",
      },
    },
  },
  args: { onToggleChecked: fn(), checked: false },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UnChecked: Story = {
  args: {
    id: "unChecked",
  },
};

export const Checked: Story = {
  args: {
    id: "checked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    disabled: true,
  },
};

export const DisableWithChecked: Story = {
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true,
  },
};

export const BigUnChecked: Story = {
  args: {
    id: "unChecked",
    size: "big",
  },
};

export const BigChecked: Story = {
  args: {
    id: "checked",
    checked: true,
    size: "big",
  },
};

export const BigDisabled: Story = {
  args: {
    id: "disabled",
    disabled: true,
    size: "big",
  },
};

export const BigDisableWithChecked: Story = {
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true,
    size: "big",
  },
};
