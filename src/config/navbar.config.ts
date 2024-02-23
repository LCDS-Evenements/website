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
    text: "Sponsors",
    href: "/#sponsors",
    display: true
  },
  {
    text: "Notre histoire",
    href: "/#story",
    display: true
  },
  {
    text: "Aftermovie",
    href: "/#aftermovie",
    display: true
  },
  {
    text: "Merchandising",
    href: "/#",
    display: false
  },
  {
    text: "F.A.Q",
    href: "/#",
    display: false
  }
];