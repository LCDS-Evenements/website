/* eslint-disable max-len */
import { sponsors } from "@/config/sponsors.config";
import type { ReactElement } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const SponsorsSection = (): ReactElement => {
  return (
    <section id="sponsors" className="w-screen h-[65vh] md:h-[65dvh] bg-blueWaves bg-no-repeat bg-cover bg-center py-28 px-0 md:px-44">
      <h2 className="text-center text-3xl md:text-5xl text-bodyBackground mb-4">NOS SPONSORS</h2>
      <p className="text-center text-lg md:text-xl text-bodyBackground mb-20 md:mb-16">Ils nous font confiance...</p>
      <div className="w-full display flex items-center justify-center">
        <Marquee className="w-full mb-44" gradient autoFill speed={40} gradientColor="#1B2237" pauseOnHover>
          {sponsors.map((sponsor, idx) => (
            <Link target="_blank" href={sponsor.href} key={idx} className="bg-whiteWaves bg-bodyBackground bg-no-repeat bg-cover bg-center rounded-full h-40 w-40 mx-6 flex items-center justify-center group">
              <Image src={sponsor.imgPath} alt={sponsor.name} width={90} height={90} className="grayscale group-hover:grayscale-0" />
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SponsorsSection;