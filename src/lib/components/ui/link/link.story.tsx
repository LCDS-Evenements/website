import type { Meta, StoryObj } from "@storybook/react";

import { CustomLink } from "./link";

const meta: Meta<typeof CustomLink> = {
  title: "UI/Custom link",
  component: CustomLink,
  tags: ["autodocs"],
  argTypes: {
    href: {
      description: "The href for the link",
      control: "text"
    },
    text: {
      description: "The text to display on the link",
      control: "text"
    },
    onClick: {
      description: "The function to call when the link is clicked",
      control: "function"
    }
  }
};

export default meta;
type Story = StoryObj<typeof CustomLink>;

export const Default: Story = {
  args: {
    href: "https://cuicuitedays.fr",
    text: "Custom link",
    onClick: () => console.log("Custom link clicked")
  }
};