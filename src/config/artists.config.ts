/* eslint-disable max-len */
type Artist = {
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
    imagePath: "/assets/artists/lucien-dahais.svg",
    bio: "Lucien Dahais est un artiste français. Il est connu pour ses performances live, ses collaborations avec des artistes de renom et son style musical unique.",
    presenceDate: "Vendredi 7 Juin",
    day: 1
  },
  {
    name: "Emira",
    imagePath: "/assets/artists/emira.svg",
    bio: "Emira est une jeune artiste française qui se produit au niveau de la région parisienne.",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Humain",
    imagePath: "/assets/artists/humain.svg",
    bio: "placeholder",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Cutting Corners",
    imagePath: "/assets/artists/cutting-corners.svg",
    bio: "placeholder",
    presenceDate: "Vendredi 7 Juin",
    day: 1
  },
  {
    name: "Alice April",
    imagePath: "/assets/artists/alice-april.svg",
    bio: "placeholder",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Boostee",
    imagePath: "/assets/artists/boostee.svg",
    bio: "placeholder",
    presenceDate: "Samedi 8 Juin",
    day: 2
  },
  {
    name: "Grayssoker",
    imagePath: "/assets/artists/grayssoker.svg",
    bio: "placeholder",
    presenceDate: "Vendredi 7 Juin",
    day: 1
  },
  {
    name: "Michel Mercury",
    imagePath: "/assets/artists/michel-mercury.svg",
    bio: "placeholder",
    presenceDate: "Vendredi 7 Juin",
    day: 1
  }
];