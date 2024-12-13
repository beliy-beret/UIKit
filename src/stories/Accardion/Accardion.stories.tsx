import type { Meta, StoryObj } from "@storybook/react";
import { Accordion as Component } from "../../components";

const meta = {
  title: "Example/Accordion",
  component: Component,
  parameters: {
    layout: "standard",
  },
  args: {
    title: "Accordion Headline",
    description:
      "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Tortor posuere ac ut consequat semper viverra nam libero.",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {};

export const OpenAccordion: Story = {
  args: {
    open: true,
  },
};

export const AccordionGroup: Story = {
  render: function Render(args) {
    return (
      <div>
        <Component {...args} />
        <Component {...args} />
        <Component {...args} />
        <Component {...args} />
      </div>
    );
  },
};
