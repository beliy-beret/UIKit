import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div style={{ margin: "24px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default preview;