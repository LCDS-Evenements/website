import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Component } from "@/lib/utils/component";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS - Template",
  description: "NextJS Template with lots of usefull stuff, by hcampos."
};

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;