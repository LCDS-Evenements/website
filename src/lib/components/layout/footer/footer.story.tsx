import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  tags: ["autodocs"],
  component: () => (
    <div className="w-fit h-fit bg-white">
      <Footer />
    </div>
  ),
  argTypes: {
    className: {
      control: "text"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    className: "font-magicRetro"
  }
};