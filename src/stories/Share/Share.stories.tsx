import type { Meta, StoryObj } from "@storybook/react";
import { Share as ShareComponent } from "../../components";

const meta = {
  title: "Example/Share",
  component: ShareComponent,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: {
    shareUrl: "",
  },
} satisfies Meta<typeof ShareComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Share: Story = {
  render: function Render(args) {
    return (
      <div
        style={{
          padding: "24px",
          border: "2px solid lightblue",
          borderRadius: "8px",
          width: "250px",
        }}
      >
        <h2>Some card title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad commodi
          deleniti dolore eveniet explicabo iusto laudantium non nostrum quae,
          quam reiciendis repellendus similique tempore tenetur ullam veritatis?
          Enim, soluta.
        </p>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <ShareComponent {...args} />
        </div>
      </div>
    );
  },
};
