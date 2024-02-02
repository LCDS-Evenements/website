/* eslint-disable max-len */
"use client";


import type { Component } from "@/lib/utils/component";
import type { Props } from "./artist-card.type";
import Image from "next/image";
import { useRef } from "react";
import Spotify from "../icons/spotify";
import Youtube from "../icons/youtube";
import Soundcloud from "../icons/soundcloud";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Twitter from "../icons/twitter";

export const ArtistCard: Component<Props> = ({ name, bio, imagePath }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (): void => {
    if (!wrapperRef.current) return;
    if (!infoRef.current) return;
    wrapperRef.current.style.transform = "perspective(900px) translateY(-5%) rotateX(15deg) translateZ(0)";
    wrapperRef.current.style.boxShadow = "2px 35px 32px -8px rgba(0, 0, 0, 0.75)";
    infoRef.current.style.transform = "translate3d(0%, 5%, 100px)";
    infoRef.current.style.opacity = "1";
  };

  const handleMouseLeave = (): void => {
    if (!wrapperRef.current) return;
    if (!infoRef.current) return;
    wrapperRef.current.style.transform = "";
    wrapperRef.current.style.boxShadow = "";
    infoRef.current.style.transform = "";
    infoRef.current.style.opacity = "0";
  };

  return (
    <div
      style={{ perspective: "2500px" }}
      className="max-h-fit max-w-full rounded-2xl group bg-transparent group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={wrapperRef}
        className="transition-all w-full h-fit -z-[1] bg-transparent group-hover:blur-[3px]"
      >
        <Image
          className="h-full w-full object-cover rounded-2xl bg-transparent"
          src={imagePath}
          width={100}
          height={100}
          alt="Photo de l'artiste"
        />
      </div>
      <div ref={infoRef} className="w-full opacity-0 rounded-md bg-blue/70 bottom-0 p-4 transition-all absolute group-hover:opacity-1">
        <h3 className="text-3xl text-bodyBackground tracking-wider mb-4">{name}</h3>
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-sm w-full text-bodyBackground max-h-32 overflow-y-scroll no-scrollbar mb-6"
        >
          {bio}
        </p>
        <div className="w-full flex items-center gap-4">
          <Spotify className="text-bodyBackground" />
          <Youtube className="text-bodyBackground" />
          <Soundcloud className="text-bodyBackground" />
          <Instagram className="text-bodyBackground" />
          <Facebook className="text-bodyBackground" />
          <Twitter className="text-bodyBackground" />
        </div>
      </div>
    </div>
  );
};