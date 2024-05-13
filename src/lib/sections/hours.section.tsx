/* eslint-disable max-len */
import { type ReactElement } from "react";
import Image from "next/image";
import { MoveRightIcon } from "lucide-react";

const HoursSection = (): ReactElement => {
  return (
    <section id="hours" className="w-screen md:h-[65dvh] bg-blueWaves bg-no-repeat bg-cover bg-center py-28 px-0 md:px-44">
      <h2 className="text-center text-3xl md:text-5xl text-white mb-4 uppercase">Horaires d&apos;ouverture</h2>
      <div className="w-full h-full relative">
        <Image src="/illustration/hours.webp" alt="Illustration représentant des oiseaux autour du texte"
          height={50}
          width={2500}
          className="w-full h-full pointer-events-none hidden md:block 2xl:absolute"
          loading="lazy"
        />
        <div className="flex items-center justify-center mt-16 md:mt-0 gap-10 md:gap-16 md:translate-y-56 md:flex-row flex-col">
          <div className="font-montserrat flex flex-col md:items-start items-center gap-2">
            <span className="text-white md:text-2xl text-lg font-light tracking-wide">Vendredi</span>
            <div className="md:text-3xl text-xl text-blue-950 px-2 py-1 rounded-lg bg-white font-bold flex items-center gap-2">
              <span>19:30</span>
              <MoveRightIcon />
              <span>03:00</span>
            </div>
          </div>
          <Image src="/illustration/flower.svg"
            alt="Fleur qui suit la charte graphique du festival"
            className="w-1/4 h-1/4 md:w-auto md:h-auto animate-spin-slow"
            width={120}
            height={120}
          />
          <div className="font-montserrat flex flex-col md:items-start items-center gap-2">
            <span className="text-white md:text-2xl text-lg font-light tracking-wide">Samedi</span>
            <div className="md:text-3xl text-xl text-blue-950 px-2 py-1 rounded-lg bg-white font-bold flex items-center gap-2">
              <span>19:30</span>
              <MoveRightIcon />
              <span>03:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;