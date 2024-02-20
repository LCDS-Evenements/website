import type { ReactElement } from "react";
import HomeSection from "@/lib/sections/home.section";
import LineUpSection from "@/lib/sections/line-up.section";
import SponsorsSection from "@/lib/sections/sponsors.section";
// import StorySection from "@/lib/sections/story.section";
// import AftermovieSection from "@/lib/sections/aftermovie.section";
import { Footer } from "@/lib/components/layout/footer";

const MainPage = (): ReactElement => {
  return (
    <main className="no-scrollbar w-screen">
      <HomeSection />
      <LineUpSection />
      <SponsorsSection />
      {/* <StorySection /> */}
      {/* <AftermovieSection /> */}
      <Footer />
    </main>
  );
};

export default MainPage;