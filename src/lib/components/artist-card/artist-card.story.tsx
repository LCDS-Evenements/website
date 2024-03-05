/* eslint-disable max-len */
import type { StoryFn } from "@storybook/react";
import type { Meta } from "@storybook/react";

import { ArtistCard } from "./artist-card";

const defaultArtist = {
  name: "Humain",
  imagePath: "./artistes/humain.webp",
  bio: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."],
  presenceDate: "Samedi 8 Juin",
  day: "SAMEDI",
  spotifyUrl: "https://cuicuitedays.fr",
  instagramUrl: "https://cuicuitedays.fr",
  youtubeUrl: "https://cuicuitedays.fr",
  tiktokUrl: "https://cuicuitedays.fr"
};

export default {
  title: "Other/ArtistCard",
  component: ArtistCard
} satisfies Meta<typeof ArtistCard>;

// Template:
const Template: StoryFn<typeof ArtistCard> = (props) => (
  <div className="h-1/3 w-1/3">
    <ArtistCard {...props} />
  </div>
);

// Stories:
export const Default = Template.bind({});
Default.args = { ...defaultArtist };