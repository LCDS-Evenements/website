"use client";

/* eslint-disable max-len */
import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/lib/components/ui/button-link";
import { CustomLink } from "@/lib/components/ui/link";
import { cn } from "@/lib/utils";
import { navbarLinks } from "@/config/navbar.config";
import { billetterieLink } from "@/config/billetterie.config";
import Link from "next/link";
import { MenuIcon, TicketIcon } from "lucide-react";
import type { Component } from "@/lib/utils/component";
import type { NavbarProps } from "./navbar.type";

export const Navbar: Component<NavbarProps> = ({ className }) => {
  const [opacity, setOpacity] = useState<string>("");
  const [background, setBackground] = useState<string>("bg-white");
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const scrollThreshold = (documentHeight - windowHeight) / 10;

      if (scrollPosition >= scrollThreshold) {
        setOpacity("opacity-80");
        setBackground("bg-white/80");
      }

      if (scrollPosition < scrollThreshold) {
        setOpacity("");
        setBackground("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        className={
          cn(
            "h-[60px] w-[90%] md:w-[96%] rounded-[50px] fixed top-6 md:top-8 left-1/2 -translate-x-1/2 flex items-center justify-center z-50 transition-all duration-300 backdrop-blur-sm group/navbar",
            background,
            className
          )
        }
      >
        <div className={cn("flex items-center justify-between w-[90%] md:w-[95%] h-full group-hover/navbar:opacity-100", opacity)}>
          <MenuIcon onClick={() => setMenuIsOpen((curr) => !curr)} className="w-6 h-6 text-blue-950 block md:hidden" />
          <Link className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block md:hidden" href="/">
            <Image src="./illustration/logo.svg" width={80} height={80} alt="Logo officiel du festival CuicuiteDays" />
          </Link>
          <Link className="hidden md:block" href="/">
            <Image src="./illustration/logo.svg" width={80} height={80} alt="Logo officiel du festival CuicuiteDays" />
          </Link>
          <div className="items-center gap-6 hidden md:flex">
            {navbarLinks.map((link, idx) => {
              if (link.display === false) return null;

              return (
                <CustomLink href={link.href} text={link.text} key={idx} />
              );
            })}
          </div>
          <ButtonLink target="_blank" href={billetterieLink} variant="hoverSimpleYellow">
            <span className="hidden md:block text-blue-950">Billetterie</span>
            <TicketIcon className="w-6 h-6 md:hidden text-blue-950" />
          </ButtonLink>
        </div>
        <div
          className={cn(
            "h-fit rounded-2xl flex flex-col items-start justify-center gap-4 px-4 py-4 fixed top-[4.5rem] left-0 transition-all duration-300",
            menuIsOpen ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0",
            background,
          )}
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          {navbarLinks.map((link, idx) => {
            if (link.display === false) return null;

            return (
              <CustomLink onClick={() => setMenuIsOpen(false)} href={link.href} text={link.text} key={idx} />
            );
          })}
        </div>
      </nav>
    </header>
  );
};