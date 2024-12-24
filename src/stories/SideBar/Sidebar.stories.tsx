import type { Meta, StoryObj } from "@storybook/react";
import { SideBar as MyComponent } from "../../components";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Sidebar",
  component: MyComponent,
  parameters: {
    layout: "standard",
  },
  args: {
    title: "Личный кабинет",
    children: "",
    logout: fn(),
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const user = {
  name: "Фамилия Имя Отчество",
  role: "Самозанятый",
};

export const SidebarWithUserInfo: Story = {
  render: function Render(args) {
    return (
      <MyComponent {...args}>
        <MyComponent.User {...user} />
        <MyComponent.Link to={""}>Profile</MyComponent.Link>
        <MyComponent.Link to={"/settings"}>Settings</MyComponent.Link>
        <MyComponent.Link to={"/messages"}>Messages</MyComponent.Link>
      </MyComponent>
    );
  },
};

export const SidebarWithoutUserInfo: Story = {
  render: function Render(args) {
    return (
      <MyComponent {...args}>
        <MyComponent.Link to={""}>Profile</MyComponent.Link>
        <MyComponent.Link to={"/settings"}>Settings</MyComponent.Link>
        <MyComponent.Link to={"/messages"}>Messages</MyComponent.Link>
      </MyComponent>
    );
  },
};
