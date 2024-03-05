import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  tags: ["autodocs"],
  component: Navbar,
  argTypes: {
    className: {
      control: "text"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    className: "font-magicRetro"
  }
};