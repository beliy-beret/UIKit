import type { Meta, StoryObj } from "@storybook/react";
import { PortalBox as MyComponent, Portals } from "../../components";

const meta = {
  title: "Example/PortalsBox",
  component: MyComponent,
  parameters: {
    layout: "standard",
  },
  args: {
    children: "",
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PortalBox: Story = {
  render: function Render() {
    return (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <MyComponent>
          <Portals.InvestPortal />
          <Portals.InvestorSupport />
          <Portals.Personal />
          <Portals.Export />
        </MyComponent>
      </div>
    );
  },
};
