import type { Meta, StoryObj } from "@storybook/react";

import { WhiteWaves } from "./white-waves";

const meta: Meta<typeof WhiteWaves> = {
  title: "Backgrounds/WhiteWaves",
  component: WhiteWaves
};

export default meta;
type Story = StoryObj<typeof WhiteWaves>;

export const Default: Story = {};