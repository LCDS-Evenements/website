"use client";

import { useEffect, type ReactElement, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ScrollToTop = (): ReactElement => {
  const [rotation, setRotation] = useState<string>("");

  useEffect(() => {
    setRotation("-rotate-90");

    const handleScroll = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const scrollThreshold = (documentHeight - windowHeight) / 2;

      if (scrollPosition >= scrollThreshold) {
        setRotation("rotate-90");
      }

      if (scrollPosition < scrollThreshold) {
        setRotation("-rotate-45");
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
    <button onClick={handleClick} className="rounded-full bg-yellowButton flex items-center justify-center fixed bottom-12 right-20 z-50">
      <Image
        src={"./illustration/bird.svg"}
        height={70}
        width={70}
        alt="Oiseau qui pointe vers le haut pour pouvoir remonter tout en haut de la page"
        className={cn(rotation, "transition duration-500 ease-in-out transform")}
      />
    </button>
  );
};