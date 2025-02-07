import type { Meta, StoryObj } from "@storybook/react";
import { Logos } from "../../components";

const List = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "nowrap",
      }}
    >
      <Logos.InvestPortal />
      <Logos.InvestCalendar />
      <Logos.InvestSupport />
      <Logos.InvestPersonal />
      <Logos.Mosreg />
      <Logos.InvestWay />
      <Logos.InvestExport />
      <Logos.IndustrialParks />
    </div>
  );
};

const meta = {
  title: "Example/Logos",
  component: List,
  parameters: {
    layout: "standard",
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PortalList: Story = {};
