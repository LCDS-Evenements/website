"use client";

/* eslint-disable max-len */
import { useEffect, type ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/lib/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = (): ReactElement => {
  const [opacity, setOpacity] = useState<string>("");

  useEffect(() => {
    const handleScroll = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const scrollThreshold = (documentHeight - windowHeight) / 2;

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
      className={
        cn(
          "bg-navbarBackground h-[60px] w-[96%] rounded-[50px] shadow fixed top-8 left-1/2 -translate-x-1/2 flex items-center justify-center z-50",
          opacity,
          "hover:opacity-100"
        )
      }
    >
      <div className="flex items-center justify-between w-[95%] h-full">
        <Image src="./illustration/logo.svg" width={80} height={80} alt="Logo officiel du festival CuicuiteDays" />
        <div className="flex items-center gap-6">
          <Link  className="text-xl" href="/">Line up</Link>
          <Link className="text-xl" href="/">Merchandising</Link>
          <Link className="text-xl" href="/">Notre histoire</Link>
          <Link className="text-xl" href="/">F.A.Q</Link>
        </div>
        <Button variant="hoverSimpleYellow" text="Billetterie" />
      </div>
    </nav>
  );
};