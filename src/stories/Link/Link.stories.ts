import type { Meta, StoryObj } from "@storybook/react";
import { Link as LinkComponent } from "../../components";

const meta = {
  title: "Example/Link",
  component: LinkComponent,
  parameters: {
    layout: "standard",
  },
  argTypes: {
    as: {
      mapping: ["a", "ReactLink"],
      control: { type: "radio" },
    },
    design: {
      mapping: [
        "Informative",
        "Body",
        "Dangerous",
        "Completed",
        "Primary",
        "Warning",
      ],
      control: {
        type: "select",
      },
    },
  },
  args: { children: "Link component", design: "Primary", as: "a", href: "#" },
} satisfies Meta<typeof LinkComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {};

export const ReactLink: Story = {
  args: {
    as: "ReactLink",
    to: "/",
  },
};
