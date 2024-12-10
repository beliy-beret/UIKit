import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../components";
import avatar from "../assets/pikachu.png";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    imgSrc: avatar,
    userInitials: "SS",
  },
};

export const WithoutImage: Story = {
  args: {
    userInitials: "SS",
  },
};
