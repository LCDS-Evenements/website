"use client";

import { useEffect, type ReactElement, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";

export const ScrollToTop = (): ReactElement => {
  const [rotation, setRotation] = useState<string>("");

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
    <Button onClick={handleClick} className="rounded-full bg-yellowButton flex items-center justify-center fixed bottom-12 right-20 z-50 p-2">
      <Image
        src={"./illustration/bird.svg"}
        height={50}
        width={50}
        alt="Oiseau qui pointe vers le haut pour pouvoir remonter tout en haut de la page"
        className={cn(rotation, "transition duration-500 ease-in-out transform")}
      />
    </Button>
  );
};