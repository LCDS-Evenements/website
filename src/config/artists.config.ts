/* eslint-disable max-len */
export type Artist = {
  name: string;
  imagePath: string;
  bio: string;
  presenceDate: string;
  day: 1 | 2;
  spotifyUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  soundcloudUrl?: string;
}

export const artists: Artist[] = [
  {
    name: "Lucien Dahais",
    imagePath: "./artistes/lucien-dahais.svg",
    bio: "Lucien dahais est un jeune artiste français qui se produit au niveau de la région parisienne. Il est un artiste complet, il chante, danse et joue de la guitare. Il a sorti son premier single en 2019 et prépare actuellement son premier album. Il a déjà fait la première partie de plusieurs artistes connus. Il a également participé à plusieurs concours de chant et a été finaliste de l'émission The Voice. Il a également participé à plusieurs concours de chant et a été finaliste de l'émission The Voice. Il a également participé à plusieurs concours de chant et a été finaliste de l'émission The Voice.",
    presenceDate: "Vendredi 7 Juin",
    day: 1,
    spotifyUrl: "https://open.spotify.com/artist/5v6"
  },
  {
    name: "Emira",
    imagePath: "./artistes/emira.svg",
    bio: "Emira est une jeune artiste française qui se produit au niveau de la région parisienne.",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Humain",
    imagePath: "./artistes/humain.svg",
    bio: "placeholder",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Cutting Corners",
    imagePath: "./artistes/cutting-corners.svg",
    bio: "placeholder",
    presenceDate: "Vendredi 7 Juin",
    day: 1
  },
  {
    name: "Alice April",
    imagePath: "./artistes/alice-april.svg",
    bio: "placeholder",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Boostee",
    imagePath: "./artistes/boostee.svg",
    bio: "placeholder",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Grayssoker",
    imagePath: "./artistes/grayssoker.svg",
    bio: "placeholder",
    presenceDate: "Vendredi 7 Juin",
    day: 1
  },
  {
    name: "Michel Mercury",
    imagePath: "./artistes/michel-mercury.svg",
    bio: "placeholder",
    presenceDate: "Vendredi 7 Juin",
    day: 1
  }
];