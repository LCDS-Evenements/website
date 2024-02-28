import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#0c0c0d",
        },
        {
          name: "white",
          value: "#FFFFFF",
        }
      ],
    }
  }
}

export default preview;
