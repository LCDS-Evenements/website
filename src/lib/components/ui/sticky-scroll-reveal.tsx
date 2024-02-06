"use client";
import type { ReactElement } from "react";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content
}: {
  content: {
    title: string;
    description: string;
  }[];
}): ReactElement => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
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
  const linearGradients = [
    "linear-gradient(to bottom right, red, blue)",
    "linear-gradient(to bottom right, green, orange)",
    "linear-gradient(to bottom right, pink, yellow)"
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length]
      }}
      className="h-[30rem] w-full overflow-y-auto flex justify-center relative space-x-64 rounded-md p-10"
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
                className="text-2xl font-bold text-slate-100"
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
                className="text-kg text-slate-300 max-w-sm mt-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length]
        }}
        className="hidden lg:block h-60 w-80 top-20 rounded-md bg-white sticky overflow-hidden"
      ></motion.div>

    </motion.div>
  );
};