import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { heightOptions } from "../src/config";

const preview: Preview = {
  argTypes: {
    height: {
      control: { type: "inline-radio" },
      options: heightOptions,
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
