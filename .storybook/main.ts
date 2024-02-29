import type { StorybookConfig } from "@storybook/nextjs";
import path from "path"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  staticDirs: [path.resolve(__dirname, "../public")],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    return config;
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
};
export default config;
