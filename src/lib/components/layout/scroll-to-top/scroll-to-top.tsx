/* eslint-disable max-len */
"use client";

import { useEffect, type ReactElement, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/lib/components/ui/button/";
import { IntersectionSponsorsStore } from "@/lib/stores/intersection-sponsors-store";

export const ScrollToTop = (): ReactElement => {
  const [rotation, setRotation] = useState<string>("");

  const isIntersecting = IntersectionSponsorsStore((state) => state.isIntersecting);

  useEffect(() => {
    const handleScroll = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const scrollThreshold = (documentHeight - windowHeight) / 10;

      if (scrollPosition >= scrollThreshold) {
        setRotation("rotate-[60deg]");
      }

      if (scrollPosition < scrollThreshold) {
        setRotation("rotate-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button onClick={handleClick} className="rounded-full bg-yellowButton flex items-center justify-center fixed bottom-6 right-6 md:bottom-12 md:right-20 z-50 p-2">
      <Image
        src={"./illustration/bird.svg"}
        height={50}
        width={50}
        alt="Oiseau qui pointe vers le haut pour pouvoir remonter tout en haut de la page"
        className={cn(rotation, "transition duration-500 ease-in-out transform w-10 h-10 md:w-auto md:h-auto")}
      />
      <div
        className={cn(
          "absolute rounded-md bg-bodyBackground px-4 py-2 min-w-[520px] -top-7 -left-[540px] w-fit shadow-xl text-left text-lg transition-all duration-500",
          isIntersecting ? "opacity-100" : "opacity-0",
        )}
        style={{ fontFamily: "Monserrat, sans-serif" }}
      >
        <div className="absolute -bottom-0 -right-0 bg-bodyBackground w-4 h-4 -z-10" />
        Si vous ne voyez pas les logos des sponsors, cliquez dessus !
      </div>
    </Button>
  );
};