/* eslint-disable max-len */
import { type ReactElement } from "react";
import { ButtonLink } from "../components/ui/button-link";
import { merchLink } from "@/config/boutique.config";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const MerchSection = (): ReactElement => {
  return (
    <section id="merch" className="w-screen bg-blueWaves bg-no-repeat bg-cover bg-center py-28 px-0 md:px-44">
      <div className="w-full flex flex-row justify-between mb-16">
        <div className="text-white text-7xl tracking-normal">
          <h2>CuicuiteDays</h2>
          <span>collection 2024</span>
        </div>
        <div>
          <p className="text-white text-xl max-w-lg mb-2 font-normal font-montserrat">Découvrez la nouvelle collection 2024 des CuicuiteDays sur notre boutique en ligne</p>
          <ButtonLink href={merchLink} target="_blank" variant="hoverScaleYellow">Découvrir le merchandising</ButtonLink>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Link href={merchLink} target="_blank" className="relative text-white text-3xl cursor-pointer ease-in-out duration-500 group/sweat hover:scale-105">
          <img src="./merch/sweat.png" alt="Sweat du merch des CuicuiteDays 2024" />
          <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 bg-blue-950 opacity-0 ease-in-out duration-300 group-hover/sweat:opacity-100">
            <ShoppingBag className="text-white" />
          </div>
          <div className="absolute bottom-4 left-6">
            <h3>Sweat</h3>
            <span>CuicuiteDays 2024</span>
          </div>
        </Link>
        <img src="./illustration/white-logo.svg" alt="Logo du festival les CuicuiteDays" className="w-[15%]" />
        <div className="flex flex-col justify-between">
          <Link href={merchLink} target="_blank" className="relative text-white text-3xl cursor-pointer ease-in-out duration-500 group/teeOiseau hover:scale-105">
            <img src="./merch/tee-oiseau.png" alt="TeeShirt oiseau du merch des CuicuiteDays 2024" />
            <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 bg-blue-950 opacity-0 ease-in-out duration-300 group-hover/teeOiseau:opacity-100">
              <ShoppingBag className="text-white" />
            </div>
            <div className="absolute bottom-4 left-6">
              <h3>Tee-Shirt Oiseau</h3>
              <span>CuicuiteDays 2024</span>
            </div>
          </Link>
          <Link href={merchLink} target="_blank" className="relative text-white text-3xl cursor-pointer ease-in-out duration-500 group/teeFleur hover:scale-105">
            <img src="./merch/tee-fleur.png" alt="TeeShirt fleur du merch des CuicuiteDays 2024" />
            <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 bg-blue-950 opacity-0 ease-in-out duration-300 group-hover/teeFleur:opacity-100">
              <ShoppingBag className="text-white" />
            </div>
            <div className="absolute bottom-4 left-6">
              <h3>Tee-Shirt Fleur</h3>
              <span>CuicuiteDays 2024</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;