import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLink } from "./button-link";

const meta: Meta<typeof ButtonLink> = {
  title: "UI/Button link",
  component: ButtonLink,
  tags: ["autodocs"],
  argTypes: {
    href: {
      description: "The href for the link",
      control: "text"
    },
    className: {
      description: "Additional classes for the button",
      control: "text"
    },
    children: {
      description: "The text to display on the button",
      control: "text"
    },
    variant: {
      description: "The variant of the button",
      control: {
        type: "select",
        options: ["default", "hoverScaleYellow", "hoverSimpleYellow"]
      }
    },
    size: {
      description: "The size of the button",
      control: {
        type: "select",
        options: ["default"]
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
  args: {
    children: "Button link",
    href: "https://cuicuitedays.fr"
  }
};

export const HoverScale: Story = {
  args: {
    children: "Button link",
    variant: "hoverScaleYellow",
    href: "https://cuicuitedays.fr"
  }
};

export const HoverSimple: Story = {
  args: {
    children: "Button link",
    variant: "hoverSimpleYellow",
    href: "https://cuicuitedays.fr"
  }
};