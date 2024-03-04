/* eslint-disable max-len */
import type { ReactElement } from "react";
import Image from "next/image";
import { ButtonLink } from "@/lib/components/ui/button-link";

const NotFound = (): ReactElement => {
  return (
    <section className="w-screen h-screen bg-blueWaves bg-center bg-cover bg-no-repeat pt-16">
      <div className="w-full h-full flex items-center justify-center relative">
        <Image
          src={"./illustration/error-illustration.svg"}
          height={150}
          width={150}
          className="w-[90%] h-[96%] pointer-events-none hidden md:block 2xl:absolute 2xl:top-[6%]"
          loading="lazy"
          alt="Ensemble d'illustrations représentant le style graphique du festival CuicuiteDays"
        />
        <Image
          src={"./illustration/responsive-error-illustration.svg"}
          height={150}
          width={150}
          className="w-[90%] h-full pointer-events-none block md:hidden"
          loading="lazy"
          alt="Ensemble d'illustrations représentant le style graphique du festival CuicuiteDays"
        />
        <div className="z-40 flex items-center flex md:items-start justify-center flex-col absolute top-[30%] md:top-[35%] md:left-32 gap-6">
          <h2 className="text-white text-2xl md:text-4xl uppercase">Page introuvable</h2>
          <p
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-white text-center text-sm md:text-lg font-thin tracking-wider max-w-[80%] md:max-w-full"
          >
            Nous ne pouvons pas afficher la page que vous demandez.
          </p>
          <ButtonLink href="/" className="z-50" variant="hoverScaleYellow">
            Revenir à l&apos;accueil
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default NotFound;