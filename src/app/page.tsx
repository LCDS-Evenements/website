import type { ReactElement } from "react";
import HomeSection from "@/lib/sections/home.section";
import LineUpSection from "@/lib/sections/line-up.section";
import StorySection from "@/lib/sections/story.section";

const MainPage = (): ReactElement => {
  return (
    <main>
      <HomeSection />
      <LineUpSection />
      <StorySection />
    </main>
  );
};

export default MainPage;