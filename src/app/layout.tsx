import type { Metadata } from "next";
import "./globals.css";
import type { Component } from "@/lib/utils/component";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Navbar } from "@/lib/components/layout/navbar";
import { ScrollToTop } from "@/lib/components/layout/scroll-to-top";

const magicRetro = localFont({ src: "../../public/font/Magic Retro.woff2" });

export const metadata: Metadata = {
  title: "NextJS - Template",
  description: "NextJS Template with lots of usefull stuff, by hcampos."
};

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(magicRetro.className, "bg-black overflow-x-hidden")}>
        <Navbar />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;