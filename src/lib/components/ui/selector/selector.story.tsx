import type { Meta, StoryObj } from "@storybook/react";

import { Selector } from "./selector";

const meta: Meta<typeof Selector> = {
  title: "UI/Selector",
  component: Selector,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "text"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {
  args: {
    text: "Selector"
  }
};