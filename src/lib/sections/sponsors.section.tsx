/* eslint-disable max-len */
import { sponsors } from "@/config/sponsors.config";
import type { ReactElement } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const SponsorsSection = (): ReactElement => {
  return (
    <section id="sponsors" className="w-screen md:h-[65dvh] bg-blueWaves bg-no-repeat bg-cover bg-center py-28 px-0 md:px-44">
      <h2 className="text-center text-3xl md:text-5xl text-bodyBackground mb-4">NOS SPONSORS</h2>
      <p className="text-center text-lg md:text-xl text-bodyBackground mb-16">Ils nous font confiance...</p>
      <div className="w-full display flex items-center justify-center">
        <Marquee className="w-full" gradient autoFill speed={40} gradientColor="#1B2237" pauseOnHover>
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="bg-whiteWaves bg-bodyBackground bg-no-repeat bg-cover bg-center rounded-full h-40 w-40 mx-6 flex items-center justify-center group">
              <Image src={sponsor.imgPath} loading="lazy" placeholder="blur" blurDataURL={sponsor.imgPath} alt={sponsor.name} width={90} height={90} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SponsorsSection;