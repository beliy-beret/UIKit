import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router";
import "../src/assets/fonts/fonts.css";

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
        <div style={{ margin: "24px", boxSizing: "border-box" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default preview;
