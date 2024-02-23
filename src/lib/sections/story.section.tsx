/* eslint-disable max-len */
import type { ReactElement } from "react";
import { StickyScroll } from "@/lib/components/ui/sticky-scroll-reveal";
import { content } from "@/config/story-content.config";

const StorySection = (): ReactElement => {
  return (
    <section id="story" className="w-screen md:h-screen bg-whiteWaves bg-center bg-auto md:bg-cover bg-repeat md:bg-no-repeat py-28">
      <h2 className="text-center text-3xl md:text-5xl text-blue mb-16 md:mb-24">NOTRE HISTOIRE</h2>
      <StickyScroll content={content} />
      <div className="w-[80%] mx-auto flex md:hidden flex-col justify-center gap-16">
        {content.map((content, idx) => (
          <div key={idx}>
            <h4 className="text-blue text-2xl">{content.title}</h4>
            <p className="text-base text-blue font-semibold tracking-wide max-w-lg mt-5" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {content.description.map((description, idx) => (
                <><span key={idx}>{description}</span><br /></>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;