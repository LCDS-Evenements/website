"use client";

import { useEffect, useState, type ReactElement } from "react";
import HomeSection from "@/lib/sections/home.section";
import LineUpSection from "@/lib/sections/line-up.section";
import SponsorsSection from "@/lib/sections/sponsors.section";
import StorySection from "@/lib/sections/story.section";
import AftermovieSection from "@/lib/sections/aftermovie.section";
import Image from "next/image";

const MainPage = (): ReactElement => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="no-scrollbar w-screen">
      {isLoaded && (
        <>
          <HomeSection />
          <LineUpSection />
          <SponsorsSection />
          <StorySection />
          <AftermovieSection />
        </>
      ) || (
        <section className="h-screen w-screen flex items-center justify-center absolute z-50 bg-blueWaves bg-cover bg-center bg-no-repeat">
          <Image
            src="/illustration/white-logo.svg"
            alt="Logo"
            width={200}
            height={200}
            className="animate-pulse"
          />
        </section>
      )}
    </main>
  );
};

export default MainPage;