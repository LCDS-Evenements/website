import type { Meta, StoryObj } from "@storybook/react";

import { BlueWaves } from "./blue-waves";

const meta: Meta<typeof BlueWaves> = {
  title: "Backgrounds/BlueWaves",
  component: BlueWaves
};

export default meta;
type Story = StoryObj<typeof BlueWaves>;

export const Default: Story = {};