/* eslint-disable max-len */
import type { ReactElement } from "react";
import { StickyScroll } from "@/lib/components/sticky-scroll-reveal/sticky-scroll-reveal";
import { content } from "@/config/story-content.config";

const StorySection = (): ReactElement => {
  return (
    <section id="story" className="w-screen md:h-screen bg-whiteWaves bg-center bg-auto md:bg-cover bg-repeat md:bg-no-repeat py-28">
      <h2 className="text-center text-3xl md:text-5xl text-blue-950 mb-16 md:mb-24 uppercase">Notre histoire</h2>
      <StickyScroll content={content} />
      <div className="w-[80%] mx-auto flex md:hidden flex-col justify-center gap-16">
        {content.map((content, idx) => (
          <div key={idx}>
            <h4 className="text-blue-950 text-2xl">{content.title}</h4>
            <p className="text-base text-blue-950 font-semibold tracking-wide max-w-lg mt-5" style={{ fontFamily: "Montserrat, sans-serif" }}>
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