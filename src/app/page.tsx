import type { ReactElement } from "react";
import HomeSection from "@/lib/sections/home.section";
import LineUpSection from "@/lib/sections/line-up.section";
import StorySection from "@/lib/sections/story.section";
import AftermovieSection from "@/lib/sections/aftermovie.section";
import SponsorsSection from "@/lib/sections/sponsors.section";
import { Footer } from "@/lib/components/layout/footer";

const MainPage = (): ReactElement => {
  return (
    <main className="no-scrollbar h-dvh w-screen">
      <HomeSection />
      <div className="-translate-y-[9%] md:-translate-y-[5%]">
        <LineUpSection />
        {/* <SponsorsSection />
        <StorySection />
        <AftermovieSection />
        <Footer /> */}
      </div>
    </main>
  );
};

export default MainPage;