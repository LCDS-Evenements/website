import type { ReactElement } from "react";
import HomeSection from "@/lib/sections/home.section";
import LineUpSection from "@/lib/sections/line-up.section";
import StorySection from "@/lib/sections/story.section";
import AftermovieSection from "@/lib/sections/aftermovie.section";

const MainPage = (): ReactElement => {
  return (
    <main className="no-scrollbar">
      <HomeSection />
      <div className="-translate-y-[5%]">
        <LineUpSection />
        <StorySection />
        <AftermovieSection />
      </div>
    </main>
  );
};

export default MainPage;