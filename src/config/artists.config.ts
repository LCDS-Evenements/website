/* eslint-disable max-len */
export type Artist = {
  name: string;
  imagePath: string;
  bio: string[];
  presenceDate: string;
  day: string;
  spotifyUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  soundcloudUrl?: string;
  tiktokUrl?: string;
  threadlUrl?: string;
}

export const artists: Artist[] = [
  {
    name: "Lucien Dahais",
    imagePath: "./artistes/lucien-dahais.svg",
    bio: [
      "Lucien Dahais a débuté sa jeune carrière à seulement 15 ans dans le plus grand complexe de nuit des Pays de la Loire. Il a été appelé à y mixer régulièrement et c’est alors qu’il a eu un véritable déclic, avec pour idée de donner une dimension live à ses prestations. Il propose aujourd’hui un show batterie, ce qui lui permet de créer une interaction unique avec son public. ✨",
      "Depuis plusieurs années, Lucien mixe sur des scènes reconnues. Ces expériences lui ont permis d’être présent sur des évènements en partenariat avec les plus grandes radios nationales françaises aux côtés d’artistes internationaux tels que, Hugel, Mosimann, Henri PFR, ou encore Ofenbach. 🌟",
      "Aujourd’hui l’artiste a acquis le statut d’un DJ-Producteur confirmé qui se distingue grâce à ses sorties musicales sur les plateformes de streaming cumulant des dizaines de milliers d’écoutes. Avec un style électro-pop fédérateur et un show live électronique, il fait partie des jeunes artistes à suivre. 🪩"
    ],
    presenceDate: "Vendredi 7 Juin",
    day: "VENDREDI",
    spotifyUrl: "https://open.spotify.com/intl-fr/artist/42MNWxMfJgu8i7GZHBR0e4?_authfailed=1",
    instagramUrl: "https://www.instagram.com/luciendahais/",
    tiktokUrl: "https://www.tiktok.com/@luciendahais"
  }
  // {
  //   name: "Emira",
  //   imagePath: "./artistes/emira.svg",
  //   bio: [
  //     "Plongez dans l’univers captivant d’emira, jeune DJ émergente dont les beats hypnotiques et l’énergie électrisante promettent de redéfinir les frontières de la scène musicale. ✨",
  //     "Attirée par la rave, l’hardstyle et l’acide, elle saura mettre tout le monde d’accord. 🌟"
  //   ],
  //   presenceDate: "Samedi 8 Juin",
  //   day: "SAMEDI",
  //   instagramUrl: "https://www.instagram.com/emira.thlt/?img_index=1",
  //   soundcloudUrl: "https://on.soundcloud.com/bAbdGXt7fxGdTBfAA",
  //   threadlUrl: "https://www.threads.net/@emira.thlt"
  // },
  // {
  //   name: "Humain",
  //   imagePath: "./artistes/humain.svg",
  //   bio: [
  //     "Découvrez HUMAIN, un duo d’artistes indépendants qui a uni ses forces pour créer une expérience musicale unique. Leur alchimie parfaite allie l’expertise en production musicale de l’un et les talents de DJ de l’autre. 🪩",
  //     "Depuis leur rencontre en début d’année 2019, ils ont collaboré pour produire une série de morceaux qui ont séduit un large public, cumulant aujourd’hui plus de 2 millions d’écoutes sur différentes plateformes de streaming. 🌟",
  //     "Grâce à leur équilibre artistique unique, HUMAIN s’est vu offrir de nombreuses opportunités de se produire lors d’événements en collaboration avec des radios, festivals et open airs à travers la France. ✨",
  //     "Leur voyage musical vous emmènera dans un univers envoûtant, oscillant entre des sonorités Tech House et Bass House pointues. 🎶"
  //   ],
  //   presenceDate: "Samedi 8 Juin",
  //   day: "SAMEDI",
  //   instagramUrl: "https://www.instagram.com/humainmusic/?img_index=1",
  //   spotifyUrl: "https://open.spotify.com/intl-fr/artist/1MN6t4NUBQaUCWnOElk4op"
  // },
  // {
  //   name: "Cutting Corners",
  //   imagePath: "./artistes/cutting-corners.svg",
  //   bio: [
  //     "Comment contenir 70 années d’énergie rock dans deux humains ?Cutting Corners l’a fait ! 🪩",
  //     "Depuis 2021, Tommy et Ricardo, à peine la vingtaine, sillonnent les routes de France pour propager leur wild rock moderne et puissant. 🌟",
  //     "Après plus de 100 concerts et quelques 30000 kms parcourus, Cutting Corners repart en tournée en 2024 et dévoile son nouveau single « i’m OK ». 🎶"
  //   ],
  //   presenceDate: "Vendredi 7 Juin",
  //   day: "VENDREDI"
  // },
  // {
  //   name: "Alice April",
  //   imagePath: "./artistes/alice-april.svg",
  //   bio: [
  //     "Alice April est une DJ / Producer passionnée, en cette fin novembre 2023, elle vient de sortir son nouveau remix Afro House d’Alabina qui a déjà été écouté + de 100 000 fois sur les plateformes. Elle est actuellement top #20 monde du classement Afro House sur Soundcloud. Le titre est déjà joué dans les plus grand club. 🌐",
  //     "Grâce à son talent et à sa détermination, Alice April a réussi à se faire remarquer sur la scène musicale, où elle a rapidement gagné en popularité. Ses performances énergiques et ses mix lui ont valu une base de fans fidèles qui ne manquent jamais une occasion de venir la voir en live. 🪩"
  //   ],
  //   presenceDate: "Samedi 8 Juin",
  //   day: "SAMEDI",
  //   instagramUrl: "https://www.instagram.com/alice.aprill/",
  //   soundcloudUrl: "https://soundcloud.com/alice-aprill"
  // },
  // {
  //   name: "Boostee",
  //   imagePath: "./artistes/boostee.svg",
  //   bio: [
  //     "En 2016, le grand public découvre Boostee avec “ Feel Alone ”. À partir de là, le rappeur attise l’engouement de la part des médias et d’un public qui semble séduit par un univers solaire. Son titre “ Pop Corn ” rythme l’été 2016 et se certifie disque de platine avec plus de 30 millions de streams et téléchargements. 🎵",
  //     "Il s'impose ensuite au sein de la scène française avec son album Bluesky (2017). 13 titres dont “Smile” et “Let Me Love” identifiables pour leurs sonorités flirtant autant avec le rap, l’électronique et la pop. Par la suite, il collabore avec des artistes comme Vianney, Zaho ou encore Slimane à qui on doit leur hit “ Luna ”. En fin d’année 2017, on le retrouve nominée à la cérémonie des NRJ MUSIC AWARDS dans la catégorie “Révélation francophone”. Par la suite, le jeune artiste sort un nouveau projet : M.A.D (My American Dream). L’album se veut être un bilan du chemin parcouru. 🌐",
  //     "Boostee signe son retour en 2021 avec un nouveau single, 'Jeunes & Tristes' sous le label Bluesky Family. Ce nouvel opus sonne comme un retour aux sources, avec des sonorités folk urbaines mettant à l’honneur cette jeunesse dont il est fier de faire partie. 🌟",
  //     "Boostee présente son quatrième album, Addenda. Sorti le 19 mai 2023, c’est aux yeux de l’artiste un album particulier puisqu’il retrace en quinze titres une relation intense et puissante. Intime et énergique, ce nouvel opus est largement dominé par une sonorité pop et positive. Porté par les singles « S’attacher » et « Faux Départ » qui comptabilisent plus de 5 millions d’écoutes sur les différentes plateformes, Boostee nous prouve, l’amour et l’attachement que sa communauté lui porte. ✨"
  //   ],
  //   presenceDate: "Samedi 8 Juin",
  //   day: "SAMEDI",
  //   instagramUrl: "https://www.instagram.com/boostee/",
  //   youtubeUrl: "https://www.youtube.com/channel/UCM-F3OsQHx8IbJetwv9UtYQ",
  //   spotifyUrl: "https://open.spotify.com/intl-fr/artist/2PNcNJDYJyoeJqUjgHz9Xa"
  // },
  // {
  //   name: "Grayssoker",
  //   imagePath: "./artistes/grayssoker.svg",
  //   bio: ["placeholder"],
  //   presenceDate: "Vendredi 7 Juin",
  //   day: "VENDREDI"
  // },
  // {
  //   name: "Michel Mercury",
  //   imagePath: "./artistes/michel-mercury.svg",
  //   bio: [
  //     "Michel, ça ne s'explique pas, ça se vit... Michel est celui qui fait vibrer tous les parquets dancefloor avec sa sélection 80's léchée et précise. Michel Mercury, c'est le Marcel Dib de la piste : un incontournable. Sa moustache et sa mulette n'ont d'égal que son aisance à guincher comme un Dieu. Si d'aventure vous avez le privilège de rencontrer Michel Mercury un jour, votre vie ne sera plus jamais la même. 🌟",
  //     "La seule limite de Michel est bien au delà du ciel... Son passage au Metal Corner de l'édition du siècle Hellfest 2022 a transformé la vie de ses 4000 spectateurs à tout jamais. A son actif, plus de 100 slams sur Céline Dion... De bar en bar, de festival en festival, Michel s'apprête désormais à embraser les Cuicuite Days comme il se doit ! 🪩"
  //   ],
  //   presenceDate: "Vendredi 7 Juin",
  //   day: "VENDREDI"
  // }
];