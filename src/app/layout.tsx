import "./globals.css";
import type { Component } from "@/lib/utils/component";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Navbar } from "@/lib/components/layout/navbar";
import { ScrollToTop } from "@/lib/components/layout/scroll-to-top";
import { Footer } from "@/lib/components/layout/footer";
import type { Viewport } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";

const magicRetro = localFont({ src: "../../public/font/Magic Retro.woff2" });

export { metadata } from "@/config/metadata.config";

export const viewport: Viewport = {
  themeColor: "#1C2235"
};

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="no-scrollbar scroll-smooth">
      <body className={cn(magicRetro.className, "bg-white overflow-x-hidden h-fit no-scrollbar relative")}>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;