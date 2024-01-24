import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Component } from "@/lib/utils/component";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/contexts/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS - Template",
  description: "NextJS Template with lots of usefull stuff, by hcampos."
};

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={cn(inter.className, "p-4 flex")}>{children}</body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;