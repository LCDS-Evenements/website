import type { ReactElement } from "react";
import Image from "next/image";
import { Button } from "@/lib/components/ui/button";

const Home = (): ReactElement => {
  return (
    <section className="w-screen h-dvh bg-home bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full flex items-center justify-center relative">
        <Image
          src={"./illustration/illustration.svg"}
          height={150}
          width={150}
          className="w-[90%] h-[94%] pointer-events-none"
          alt="Ensemble d'illustrations représentant le style graphique du festival CuicuiteDays"
        />
        <div className="flex items-center justify-center flex-col fixed top-[75%] gap-3">
          <h4
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-white text-center text-lg font-thin tracking-wider"
          >
            RÉSERVEZ DÈS MAINTENANT SUR NOTRE BILLETTERIE !
          </h4>
          <Button variant="hoverYellow" text={"Prenez-vos places !"} />
        </div>
      </div>
    </section>
  );
};

export default Home;