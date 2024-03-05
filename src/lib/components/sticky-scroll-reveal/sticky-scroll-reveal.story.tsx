/* eslint-disable max-len */
import type { Meta, StoryObj } from "@storybook/react";

import { StickyScroll } from "./sticky-scroll-reveal";

const meta: Meta<typeof StickyScroll> = {
  title: "Other/StickyScroll",
  component: StickyScroll,
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "Content to display in the sticky scroll",
      control: {
        type: "object"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof StickyScroll>;

export const Default: Story = {
  args: {
    content: [
      {
        title: "Lorem ipsum",
        description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]
      },
      {
        title: "Lorem ipsum",
        description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]
      },
      {
        title: "Lorem ipsum",
        description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]
      }
    ]
  }
};