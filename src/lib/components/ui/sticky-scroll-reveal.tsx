"use client";
import type { ReactElement } from "react";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

export const StickyScroll = ({
  content
}: {
  content: {
    title: string;
    description: string;
  }[];
}): ReactElement => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"]
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    "transparent",
    "transparent",
    "transparent"
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length]
      }}
      className="h-[30rem] w-full overflow-y-auto flex justify-center relative space-x-36 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3
                }}
                className="text-3xl font-semibold tracking-wider text-bodyBackground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3
                }}
                className="text-lg text-bodyBackground font-semibold tracking-wide max-w-sm mt-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className="hidden lg:block h-80 w-[30rem] top-10 rounded-md bg-white sticky border-2 border-bodyBackground">
        <Image
          className="absolute -top-[16%] -left-[10%] z-10"
          src={"/illustration/flower.svg"}
          alt="Fleur qui suit la charte graphique du festival"
          width={120}
          height={120}
        />
        <Image
          className="w-full h-full"
          src={`/photos/${activeCard + 1}.jpg`}
          alt="Photo qui représente le festival Les CuicuiteDays"
          height={500}
          width={450}
        />
        <Image
          className="absolute -bottom-[16%] -right-[10%] z-10"
          src={"/illustration/bird.svg"}
          alt="Oiseau qui suit la charte graphique du festival"
          width={120}
          height={120}
        />
      </motion.div>
    </motion.div>
  );
};