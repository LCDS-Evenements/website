import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  brandTitle: "CCDAYS | UI Kit",
  brandUrl: "https://cuicuitedays.fr",
  brandImage: "https://cuicuitedays.fr/logo.png",
  brandTarget: "_blank",

  fontBase: "Montserrat, sans-serif",
  fontCode: "monospace",

  colorPrimary: "#ffb003",
  colorSecondary: "#1b2237",

  appBg: "#1b2237",
  appContentBg: "red",
  appBorderColor: "#f9faff",
  appBorderRadius: 2,

  textColor: "#f9faff",
  textInverseColor: "red",

  barTextColor: "#f9faff",
  barHoverColor: "#ffb003",
  barSelectedColor: "#ffb003",
  barBg: "#1b2237",

  inputBg: "red",
  inputBorder: "green",
  inputTextColor: "purple",
  inputBorderRadius: 2,
});