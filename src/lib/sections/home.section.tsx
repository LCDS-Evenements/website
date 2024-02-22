import type { ReactElement } from "react";
import Image from "next/image";
import { ButtonLink } from "@/lib/components/ui/button-link";
import { billetterieLink } from "@/config/billetterie.config";

const HomeSection = (): ReactElement => {
  return (
    <section id="#" className="w-screen h-[75vh] md:h-dvh bg-blueWaves bg-no-repeat bg-cover bg-">
      <div className="w-full h-full flex items-center justify-center relative">
        <Image
          src={"./illustration/illustration.svg"}
          height={150}
          width={150}
          className="w-[90%] h-[94%] pointer-events-none hidden md:block"
          alt="Ensemble d'illustrations représentant le style graphique du festival CuicuiteDays"
        />
        <Image
          src={"./illustration/responsive-illustration.svg"}
          height={150}
          width={150}
          className="w-[90%] h-[94%] pointer-events-none block md:hidden absolute -top-4"
          alt="Ensemble d'illustrations représentant le style graphique du festival CuicuiteDays"
        />
        <div className="z-40 flex items-center justify-center flex-col absolute top-[70%] md:top-[80%] gap-6">
          <h4
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-white text-center text-sm md:text-lg font-thin tracking-wider max-w-[80%] md:max-w-full"
          >
            RÉSERVEZ DÈS MAINTENANT SUR NOTRE BILLETTERIE !
          </h4>
          <ButtonLink href={billetterieLink} className="z-50" variant="hoverScaleYellow" text="Prenez-vos places !" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;