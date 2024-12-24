import type { Meta, StoryObj } from "@storybook/react";
import { SideBar as MyComponent } from "../../components";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Sidebar",
  component: MyComponent,
  parameters: {
    layout: "standard",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  args: {
    title: "Личный кабинет",
    children: "",
    logout: fn(),
    userRole: "Самозанятый",
    userImgSrc: "",
    userName: "Фамилия Имя Отчество",
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sidebar: Story = {
  render: function Render(args) {
    return (
      <div style={{ width: "300px" }}>
        <MyComponent {...args}>
          <MyComponent.Link to={""}>Profile</MyComponent.Link>
          <MyComponent.Link to={"/settings"}>Settings</MyComponent.Link>
          <MyComponent.Link to={"/messages"}>Messages</MyComponent.Link>
        </MyComponent>
      </div>
    );
  },
};
