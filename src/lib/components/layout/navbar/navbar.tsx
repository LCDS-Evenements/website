"use client";

/* eslint-disable max-len */
import { useEffect, type ReactElement, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/lib/components/ui/button-link";
import { NextLink } from "@/lib/components/ui/link";
import { cn } from "@/lib/utils";

export const Navbar = (): ReactElement => {
  const [opacity, setOpacity] = useState<string>("");

  useEffect(() => {
    const handleScroll = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const scrollThreshold = (documentHeight - windowHeight) / 4;

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
    <nav
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className={
        cn(
          "bg-navbarBackground h-[60px] w-[96%] rounded-[50px] fixed top-8 left-1/2 -translate-x-1/2 flex items-center justify-center z-50 transition-all duration-300",
          opacity,
          "hover:opacity-100"
        )
      }
    >
      <div className="flex items-center justify-between w-[95%] h-full">
        <Image src="./illustration/logo.svg" width={80} height={80} alt="Logo officiel du festival CuicuiteDays" />
        <div className="flex items-center gap-6">
          <NextLink href="" text="Line up" />
          <NextLink href="" text="Merchandising" />
          <NextLink href="" text="Notre histoire" />
          <NextLink href="" text="F.A.Q" />
        </div>
        <ButtonLink href="" variant="hoverSimpleYellow" text="Billetterie" />
      </div>
    </nav>
  );
};