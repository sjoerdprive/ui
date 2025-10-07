import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { heightOptions, themeOptions } from "../src/config";

const preview: Preview = {
  argTypes: {
    height: {
      control: { type: "inline-radio" },
      options: heightOptions,
    },
    theme: {
      control: { type: "inline-radio" },
      options: themeOptions,
    },
  },
  parameters: {
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
