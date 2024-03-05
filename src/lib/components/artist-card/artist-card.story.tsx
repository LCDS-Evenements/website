/* eslint-disable max-len */
import type { Meta, StoryObj } from "@storybook/react";

import { ArtistCard } from "./artist-card";

const meta: Meta<typeof ArtistCard> = {
  title: "Other/ArtistCard",
  component: ArtistCard,
  tags: ["autodocs"],
  argTypes: {

  }
};

export default meta;
type Story = StoryObj<typeof ArtistCard>;

export const Default: Story = {
  args: {
    name: "Humain",
    imagePath: "./artistes/humain.webp",
    bio: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."],
    presenceDate: "Samedi 8 Juin",
    day: "SAMEDI",
    spotifyUrl: "https://cuicuitedays.fr",
    instagramUrl: "https://cuicuitedays.fr",
    youtubeUrl: "https://cuicuitedays.fr",
    tiktokUrl: "https://cuicuitedays.fr"
  }
};