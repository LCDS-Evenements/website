import type { ReactElement } from "react";
import HomeSection from "@/lib/sections/home.section";
import LineUpSection from "@/lib/sections/line-up.section";
import StorySection from "@/lib/sections/story.section";
import AftermovieSection from "@/lib/sections/aftermovie.section";
import SponsorsSection from "@/lib/sections/sponsors.section";

const MainPage = (): ReactElement => {
  return (
    <main className="no-scrollbar">
      <HomeSection />
      <div className="-translate-y-[5%]">
        <LineUpSection />
        <SponsorsSection />
        <StorySection />
        <AftermovieSection />
      </div>
    </main>
  );
};

export default MainPage;