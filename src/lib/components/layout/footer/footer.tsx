/* eslint-disable max-len */
import type { ReactElement } from "react";
import Instagram from "../../icons/instagram";
import Facebook from "../../icons/facebook";
import Youtube from "../../icons/youtube";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "../../ui/button-link";
import { billetterieLink } from "@/config/billetterie.config";

export const Footer = (): ReactElement => {
  return (
    <footer className="w-screen md:h-[45dvh] bg-whiteWaves bg-no-repeat bg-cover bg-center py-16 px-10 md:px-40">
      <div className="w-full md:h-full flex flex-col justify-between gap-6 md:gap-0 items-center">
        <div className="w-full md:h-[62%] flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 justify-between relative">
          <div>
            <Image src="./illustration/logo.svg" alt="Logo du festival LesCuicuitedays" width={120} height={120} />
            <Link href="mailto:communication.cuicuitedays@gmail.com" style={{ fontFamily: "Montserrat, sans-serif" }} className="text-blue text-base md:text-lg font-light">communication.cuicuitedays@gmail.com</Link>
          </div>
          <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <Link style={{ fontFamily: "Montserrat, sans-serif" }} className="text-blue text-lg font-light" href="/legal-notice">Mentions légales</Link>
          </div>
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif" }} className="text-blue font-semibold text-xl mb-2 md:mb-4">Prenez vos places !</p>
            <ButtonLink href={billetterieLink} text="Billetterie" variant="hoverScaleYellow"/>
          </div>
        </div>
        <div className="w-full h-1 md:h-[1%] bg-divider rounded-md"></div>
        <div className="w-full md:h-[20%] flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 justify-between relative">
          <div className="flex items-center gap-4">
            <Link target="_blank" href="https://www.instagram.com/cuicuitedays/" className="hover:bg-divider p-3 rounded-full border-2 border-divider">
              <Instagram className="text-blue w-5 h-5" />
            </Link>
            <Link target='_blank' href="https://www.facebook.com/people/Les-Cuicuitedays/100089684250095/?mibextid=LQQJ4d" className="hover:bg-divider p-3 rounded-full border-2 border-divider">
              <Facebook className="text-blue w-5 h-5" />
            </Link>
            <Link target='_blank' href="https://www.youtube.com/@lescuicuitedays" className="hover:bg-divider p-3 rounded-full border-2 border-divider">
              <Youtube className="text-blue w-5 h-5" />
            </Link>
          </div>
          <p style={{ fontFamily: "Montserrat, sans-serif" }} className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md;-translate-y-1/2 text-blue text-lg font-light">
            Design by
            <Link href="linkedin.com/in/antoine-gervais-2475911aa" target="_blank" className="text-yellowButton"> Antoine GERVAIS </Link>
            and developped by
            <Link href="malt.fr/profile/hugocampos" target="_blank" className="text-yellowButton"> Hugo CAMPOS</Link>
          </p>
          <p style={{ fontFamily: "Montserrat, sans-serif" }} className="text-lg font-light text-blue">© LesCuicuiteDays</p>
        </div>
      </div>
    </footer>
  );
};