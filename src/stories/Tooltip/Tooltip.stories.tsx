import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "../../components";
import { Wrapper, AutoPositionWrapper } from "./style";

const meta = {
  title: "Example/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "standard",
  },
  argTypes: {},
  args: {
    content:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightVariantTooltip: Story = {
  args: {
    width: 200,
  },
  render: function Render(args) {
    return (
      <Wrapper>
        <div className="top">
          <Tooltip {...args} position="TL">
            <Button variant="Secondary">TL</Button>
          </Tooltip>
          <Tooltip {...args} position="TOP">
            <Button variant="Secondary">TOP</Button>
          </Tooltip>
          <Tooltip {...args} position="TR">
            <Button variant="Secondary">TR</Button>
          </Tooltip>
        </div>

        <div className="right">
          <Tooltip {...args} position="RT">
            <Button variant="Secondary">RT</Button>
          </Tooltip>
          <Tooltip {...args} position="RIGHT">
            <Button variant="Secondary">RIGHT</Button>
          </Tooltip>
          <Tooltip {...args} position="RB">
            <Button variant="Secondary">RB</Button>
          </Tooltip>
        </div>

        <div className="bottom">
          <Tooltip {...args} position="BL">
            <Button variant="Secondary">BL</Button>
          </Tooltip>
          <Tooltip {...args} position="BOTTOM">
            <Button variant="Secondary">BOTTOM</Button>
          </Tooltip>
          <Tooltip {...args} position="BR">
            <Button variant="Secondary">BR</Button>
          </Tooltip>
        </div>

        <div className="left">
          <Tooltip {...args} position="LT">
            <Button variant="Secondary">LT</Button>
          </Tooltip>
          <Tooltip {...args} position="LEFT">
            <Button variant="Secondary">LEFT</Button>
          </Tooltip>
          <Tooltip {...args} position="LB">
            <Button variant="Secondary">LB</Button>
          </Tooltip>
        </div>
      </Wrapper>
    );
  },
};
export const DarkVariantTooltip: Story = {
  args: {
    variant: "DARK",
    width: 200,
  },
  render: function Render(args) {
    return (
      <Wrapper>
        <div className="top">
          <Tooltip {...args} position="TL">
            <Button>TL</Button>
          </Tooltip>
          <Tooltip {...args} position="TOP">
            <Button>TOP</Button>
          </Tooltip>
          <Tooltip {...args} position="TR">
            <Button>TR</Button>
          </Tooltip>
        </div>

        <div className="right">
          <Tooltip {...args} position="RT">
            <Button>RT</Button>
          </Tooltip>
          <Tooltip {...args} position="RIGHT">
            <Button>RIGHT</Button>
          </Tooltip>
          <Tooltip {...args} position="RB">
            <Button>RB</Button>
          </Tooltip>
        </div>

        <div className="bottom">
          <Tooltip {...args} position="BR">
            <Button>BR</Button>
          </Tooltip>
          <Tooltip {...args} position="BOTTOM">
            <Button>BOTTOM</Button>
          </Tooltip>
          <Tooltip {...args} position="BL">
            <Button>BL</Button>
          </Tooltip>
        </div>

        <div className="left">
          <Tooltip {...args} position="LB">
            <Button>LB</Button>
          </Tooltip>
          <Tooltip {...args} position="LEFT">
            <Button>RB</Button>
          </Tooltip>
          <Tooltip {...args} position="LT">
            <Button>LT</Button>
          </Tooltip>
        </div>
      </Wrapper>
    );
  },
};
export const AutoPositionTooltip: Story = {
  args: {
    width: 250,
  },
  render: function Render(args) {
    return (
      <AutoPositionWrapper>
        <div className="container tl">
          <Tooltip {...args}>
            <Button>
              Element <br />
              Element <br />
              Element <br />
              Element <br />
            </Button>
          </Tooltip>
        </div>
        <div className="container top">
          <Tooltip {...args}>
            <Button>
              Element <br />
            </Button>
          </Tooltip>
        </div>
        <div className="container tr">
          <Tooltip {...args}>
            <Button>
              Element <br />
              Element <br />
              Element <br />
              Element <br />
            </Button>
          </Tooltip>
        </div>
        <div className="container br">
          <Tooltip {...args}>
            <Button>
              Element <br />
              Element <br />
              Element <br />
              Element <br />
            </Button>
          </Tooltip>
        </div>
        <div className="container bottom">
          <Tooltip {...args}>
            <Button>
              Element <br />
              Element <br />
              Element <br />
              Element <br />
            </Button>
          </Tooltip>
        </div>
        <div className="container bl">
          <Tooltip {...args}>
            <Button>
              Element <br />
              Element <br />
              Element <br />
              Element <br />
            </Button>
          </Tooltip>
        </div>
      </AutoPositionWrapper>
    );
  },
};
