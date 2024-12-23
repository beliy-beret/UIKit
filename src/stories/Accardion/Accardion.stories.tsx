import type { Meta, StoryObj } from "@storybook/react";
import { Accordion as Component } from "../../components";

const meta = {
  tags: ["autodocs"],
  title: "Example/Accordion",
  component: Component,
  parameters: {
    layout: "standard",
  },
  args: {
    title: "Accordion Headline",
    children:
      "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Tortor posuere ac ut consequat semper viverra nam libero.",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
  args: {},
};

export const OpenAccordion: Story = {
  args: {
    open: true,
  },
};

export const WithChildren: Story = {
  render: function Render(args) {
    return (
      <Component {...args}>
        <ul>
          <li>Январь</li>
          <li>Февраль</li>
          <li>Март</li>
          <li>Апрель</li>
        </ul>
      </Component>
    );
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
