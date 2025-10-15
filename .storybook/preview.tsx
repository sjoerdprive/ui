import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { heightOptions, themeOptions } from "../src/config";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-10">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
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
