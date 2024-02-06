/* eslint-disable max-len */
import type { Metadata } from "next";

const data = {
  title: "Les CuicuiteDays | 7 & 8 Juin 2024",
  description: [
    "Les CuicuiteDays revienne cette année pour une nouvelle édition qui aura lieu les 7 et 8 juin 2024.",
    "Durant ces deux jours vous pourrez retrouver 8 artistes qui se produiront sur la scène du festival.",
    "Pour plus d'informations, direction nos réseaux sociaux !"
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
    images: ["https://scontent-cdg4-2.cdninstagram.com/v/t51.2885-19/408643515_402785625411405_5383316306046851764_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cdg4-2.cdninstagram.com&_nc_cat=109&_nc_ohc=zbWZ6tF1J6wAX-Fhzqk&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDr2oNAYJ5EWrt_ZwsCgCmujQdAQCPhF3sXjKNALkAIpw&oe=65C66306&_nc_sid=8b3546"]
  },

  twitter: {
    title: {
      template: "%s - " + data.title,
      default: data.title,
      absolute: data.title
    },
    description: data.description,
    site: data.siteName,
    images: ["https://scontent-cdg4-2.cdninstagram.com/v/t51.2885-19/408643515_402785625411405_5383316306046851764_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cdg4-2.cdninstagram.com&_nc_cat=109&_nc_ohc=zbWZ6tF1J6wAX-Fhzqk&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDr2oNAYJ5EWrt_ZwsCgCmujQdAQCPhF3sXjKNALkAIpw&oe=65C66306&_nc_sid=8b3546"]
  }
};