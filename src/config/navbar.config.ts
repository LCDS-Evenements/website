export type Links = {
  text: string;
  href: string;
  display: boolean;
}

export const navbarLinks: Links[] = [
  {
    text: "Line up",
    href: "/#lineup",
    display: true
  },
  {
    text: "Merch",
    href: "/#merch",
    display: true
  },
  {
    text: "Notre histoire",
    href: "/#story",
    display: true
  },
  {
    text: "Sponsors",
    href: "/#sponsors",
    display: true
  },
  {
    text: "Aftermovie",
    href: "/#aftermovie",
    display: true
  },
  {
    text: "F.A.Q",
    href: "/#",
    display: false
  },
  {
    text: "Map",
    href: "/map",
    display: true
  }
];