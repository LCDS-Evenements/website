import type { Meta, StoryObj } from "@storybook/react";

import { ScrollToTop } from "./scroll-to-top";

const meta: Meta<typeof ScrollToTop> = {
  title: "Layout/Scroll to top",
  tags: ["autodocs"],
  component: () => (
    <div className="w-screen h-[150vh]">
      <ScrollToTop />
    </div>
  )
};

export default meta;
type Story = StoryObj<typeof ScrollToTop>;

export const Default: Story = {};