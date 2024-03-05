import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import cuicuitedays from "./cuicuitedays";

const preview: Preview = {
  parameters: {
    docs: {
      theme: cuicuitedays
    },

    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    backgrounds: {
      default: "white",
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
