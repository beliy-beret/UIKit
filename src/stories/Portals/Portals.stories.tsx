import type { Meta, StoryObj } from "@storybook/react";
import { Portals } from "../../components";

const List = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        <Portals.InvestPortal />
        <Portals.Export />
        <Portals.InvestorWay />
        <Portals.InvestorCalendar />
        <Portals.InvestorSupport />
        <Portals.Personal />
        <Portals.IndustrialParks />
      </div>
      <div
        style={{
          gap: "8px",
          marginTop: "16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        <Portals.InvestPortal disabled={true} />
        <Portals.Export disabled={true} />
        <Portals.InvestorWay disabled={true} />
        <Portals.InvestorCalendar disabled={true} />
        <Portals.InvestorSupport disabled={true} />
        <Portals.Personal disabled={true} />
        <Portals.IndustrialParks disabled={true} />
      </div>
    </div>
  );
};

const meta = {
  title: "Example/Portals",
  component: List,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PortalList: Story = {};
