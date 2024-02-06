/* eslint-disable max-len */
import type { Metadata } from "next";

const data = {
  title: "Les CuicuiteDays | 7 & 8 Juin 2024",
  description: [
    "Les CuicuiteDays revienne cette année pour une nouvelle édition qui aura lieu les 7 et 8 juin 2024. 📅",
    "Durant ces deux jours vous pourrez retrouver 8 artistes qui se produiront sur la scène du festival. 🎤",
    "Pour plus d'informations, direction nos réseaux sociaux ! 🌐"
  ].join(" "),
  siteName: "Les CuicuiteDays | 7 & 8 Juin 2024"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cuicuitedays.fr/"),

  title: {
    template: "%s - " + data.title,
    default: data.title,
    absolute: data.title
  },
  description: data.description,
  applicationName: data.siteName,

  keywords: ["festival", "musique", "concert", "cuicuitedays", "amis", "food trucks", "billetterie", "bressuire", "noirlieu", "deux-sèvres", "nouvelle-aquitaine"],

  openGraph: {
    title: {
      template: "%s - " + data.title,
      default: data.title,
      absolute: data.title
    },
    description: data.description,
    siteName: data.siteName,
    url: "https://cuicuitedays.fr/",
    type: "website",
    images: "https://opengraph.b-cdn.net/production/documents/41dae185-f560-41e8-ae57-ef85000f55ea.png?token=6gbYmmc3AwAse5n49gJVIF03ka3JTzN19F3ucNF5l9I&height=1200&width=1200&expires=33243218343"
  },

  twitter: {
    title: {
      template: "%s - " + data.title,
      default: data.title,
      absolute: data.title
    },
    description: data.description,
    site: data.siteName,
    images: "https://opengraph.b-cdn.net/production/documents/41dae185-f560-41e8-ae57-ef85000f55ea.png?token=6gbYmmc3AwAse5n49gJVIF03ka3JTzN19F3ucNF5l9I&height=1200&width=1200&expires=33243218343"
  }
};