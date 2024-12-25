import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs as Component } from "../../components";
import { Link } from "react-router";
import { BreadcrumbItem } from "../../components/Breadcrumbs/types.ts";

const Item = ({ to, label }: BreadcrumbItem) => <Link to={to}>{label}</Link>;

const meta = {
  title: "Example/Breadcrumbs",
  component: Component,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: {
    list: [
      { to: "", label: "Main" },
      { to: "", label: "Section 1" },
      { to: "", label: "Section 2" },
      { to: "", label: "Section 3" },
    ],
    renderItem: (item) => <Item {...item} />,
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Breadcrumbs: Story = {};
