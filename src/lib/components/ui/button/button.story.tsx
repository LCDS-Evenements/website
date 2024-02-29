import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
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
    },
    onClick: {
      description: "The function to call when the button is clicked",
      control: "function",
      action: "clicked"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: action("clicked")
  }
};