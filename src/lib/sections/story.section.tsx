/* eslint-disable max-len */
import type { ReactElement } from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { content } from "@/config/lineup-content.config";

const StorySection = (): ReactElement => {
  return (
    <section className="w-screen h-screen bg-blueWaves bg-no-repeat bg-cover bg-center py-28">
      <h2 className="text-center text-5xl text-bodyBackground mb-16">NOTRE HISTOIRE</h2>
      <StickyScroll content={content} />
    </section>
  );
};

export default StorySection;