import type { Meta, StoryObj } from "@storybook/react";
import { Link as LinkComponent } from "../../components";

const meta = {
  title: "Example/Links/Link",
  component: LinkComponent,
  parameters: {
    layout: "standard",
  },
  argTypes: {
    design: {
      control: { disable: true },
    },
    href: {
      control: { disable: true },
    },
  },
  args: { children: "Link component", href: "" },
} satisfies Meta<typeof LinkComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {};
export const LinkDangerous: Story = {
  args: {
    design: "Dangerous",
  },
};
export const LinkCompleted: Story = {
  args: {
    design: "Completed",
  },
};
export const LinkPrimary: Story = {
  args: {
    design: "Primary",
  },
};
export const LinkWarning: Story = {
  args: {
    design: "Warning",
  },
};
