import type { ReactElement } from "react";
import Home from "@/lib/sections/home.section";
import LineUp from "@/lib/sections/line-up.section";
import StorySection from "@/lib/sections/story.section";

const MainPage = (): ReactElement => {
  return (
    <main>
      <Home />
      <LineUp />
      <StorySection />
    </main>
  );
};

export default MainPage;