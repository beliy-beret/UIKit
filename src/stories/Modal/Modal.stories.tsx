import type { Meta, StoryObj } from "@storybook/react";
import { Modal as ModalComponent } from "../../components";
import { useState } from "react";

const meta = {
  title: "Example/Modal",
  component: ModalComponent,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ModalComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const Content = ({
  backgroundColor = "white",
}: {
  backgroundColor?: string;
}) => {
  return (
    <p
      style={{
        maxWidth: "250px",
        backgroundColor: `${backgroundColor}`,
        padding: "24px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
      dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis
      consectetur corporis delectus, dignissimos, ducimus est eum iusto modi
      quos ratione voluptatum?
    </p>
  );
};

export const Modal: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setOpen(true)}>Open modal window</button>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis
          consectetur corporis delectus, dignissimos, ducimus est eum iusto modi
          quos ratione voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis
          consectetur corporis delectus, dignissimos, ducimus est eum iusto modi
          quos ratione voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          dignissimos ea eaque error ipsum minima nisi, numquam! Blanditiis
          consectetur corporis delectus, dignissimos, ducimus est eum iusto modi
          quos ratione voluptatum?
        </p>

        {open && (
          <ModalComponent {...args} onClose={() => setOpen(false)}>
            <Content />
          </ModalComponent>
        )}
      </div>
    );
  },
};

export const DefaultModal: Story = {
  args: {
    children: <Content />,
  },
};

export const TransparentModal: Story = {
  args: {
    children: <Content backgroundColor={"lightblue"} />,
    transparent: true,
  },
};
