import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  brandTitle: "CCDAYS | UI Kit",
  brandUrl: "https://cuicuitedays.fr",
  brandImage: "./illustration/white-logo.svg",
  brandTarget: "_blank",

  fontBase: "Montserrat, sans-serif",
  fontCode: "monospace",

  colorPrimary: "#ffb003",
  colorSecondary: "#f3b33f",

  appBg: "#1b2237",
  appContentBg: "#1b2237",
  appBorderColor: "#f9faff",
  appBorderRadius: 4,

  textColor: "#f9faff",
  textInverseColor: "red",

  barTextColor: "#f9faff",
  barHoverColor: "#ffb003",
  barSelectedColor: "#ffb003",
  barBg: "#1b2237",

  inputBg: "#1b2237",
  inputBorder: "#f9faff",
  inputTextColor: "#f9faff",
  inputBorderRadius: 4,
});