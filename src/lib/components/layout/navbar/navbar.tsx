"use client";

/* eslint-disable max-len */
import { useEffect, type ReactElement, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/lib/components/ui/button-link";
import { NextLink } from "@/lib/components/ui/link";
import { cn } from "@/lib/utils";
import { navbarLinks } from "@/config/navbar.config";
import { billetterieLink } from "@/config/billetterie.config";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

export const Navbar = (): ReactElement => {
  const [opacity, setOpacity] = useState<string>("");

  useEffect(() => {
    const handleScroll = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const scrollThreshold = (documentHeight - windowHeight) / 10;

      if (scrollPosition >= scrollThreshold) {
        setOpacity("opacity-80");
      }

      if (scrollPosition < scrollThreshold) {
        setOpacity("");
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
            "bg-navbarBackground h-[60px] w-[90%] md:w-[96%] rounded-[50px] fixed top-6 md:top-8 left-1/2 -translate-x-1/2 flex items-center justify-center z-50 transition-all duration-300",
            opacity,
            "hover:opacity-100"
          )
        }
      >
        <div className="flex items-center justify-between w-[90%] md:w-[95%] h-full">
          <Link href="/">
            <Image src="./illustration/logo.svg" width={80} height={80} alt="Logo officiel du festival CuicuiteDays" />
          </Link>
          <div className="items-center gap-6 hidden md:flex">
            {navbarLinks.map((link, idx) => {
              if (link.display === false) return null;

              return (
                <NextLink href={link.href} text={link.text} key={idx} />
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <ButtonLink href={billetterieLink} variant="hoverSimpleYellow" text="Billetterie" />
            <MenuIcon className="w-6 h-6 text-blue block md:hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
};