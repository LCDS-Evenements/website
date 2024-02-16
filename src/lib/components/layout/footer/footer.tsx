/* eslint-disable max-len */
import type { ReactElement } from "react";
import Instagram from "../../icons/instagram";
import Facebook from "../../icons/facebook";
import Tiktok from "../../icons/tiktok";
import Youtube from "../../icons/youtube";
import Link from "next/link";

export const Footer = (): ReactElement => {
  return (
    <footer className="w-screen h-[45dvh] bg-blue py-16 px-28" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="w-full h-full bg-red-500 flex flex-col justify-between items-center">
        <div className="bg-orange-500 w-full h-[62%]">

        </div>
        <div className="w-full h-[2%] bg-divider"></div>
        <div className="w-full h-[20%] bg-yellow-500 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <Link target="_blank" href="https://www.instagram.com/cuicuitedays/" className="hover:bg-divider p-3 rounded-full border-2 border-divider">
              <Instagram className="text-bodyBackground w-5 h-5" />
            </Link>
            <Link target='_blank' href="https://www.facebook.com/people/Les-Cuicuitedays/100089684250095/?mibextid=LQQJ4d" className="hover:bg-divider p-3 rounded-full border-2 border-divider">
              <Facebook className="text-bodyBackground w-5 h-5" />
            </Link>
            <Link target='_blank' href="https://www.tiktok.com/@cuicuitedays" className="hover:bg-divider p-3 rounded-full border-2 border-divider">
              <Tiktok className="text-bodyBackground w-5 h-5" />
            </Link>
            <Link target='_blank' href="https://www.youtube.com/@lescuicuitedays" className="hover:bg-divider p-3 rounded-full border-2 border-divider">
              <Youtube className="text-bodyBackground w-5 h-5" />
            </Link>
          </div>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bodyBackground text-lg font-light">Design by Antoine GERVAIS and developped by Hugo CAMPOS</p>
          <p className="text-lg font-light text-bodyBackground">© LesCuicuiteDays</p>
        </div>
      </div>
    </footer>
  );
};