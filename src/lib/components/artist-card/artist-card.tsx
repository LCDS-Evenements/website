/* eslint-disable max-len */
"use client";

import { useRef } from "react";
import type { Component } from "@/lib/utils/component";
import type { Props } from "./artist-card.type";
import Spotify from "@/lib/components/icons/spotify";
import Youtube from "@/lib/components/icons/youtube";
import Soundcloud from "@/lib/components/icons/soundcloud";
import Instagram from "@/lib/components/icons/instagram";
import Facebook from "@/lib/components/icons/facebook";
import Twitter from "@/lib/components/icons/twitter";
import Tiktok from "@/lib/components/icons/tiktok";
import Thread from "@/lib/components/icons/thread";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

export const ArtistCard: Component<Props> = ({
  name,
  bio,
  imagePath,
  spotifyUrl,
  youtubeUrl,
  facebookUrl,
  instagramUrl,
  soundcloudUrl,
  twitterUrl,
  tiktokUrl,
  threadlUrl
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const md = useMediaQuery("(min-width: 768px)");
  const xxl = useMediaQuery("(min-width: 1536px)");

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

  console.log(md);

  return (
    <div
      style={{ perspective: "2500px" }}
      className={cn(
        "rounded-2xl group bg-transparent w-3/4 h-3/4",
        md ? "max-w-full max-h-fit w-auto h-auto" : "",
        xxl ? "w-[90%] h-[90%]" : "",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={wrapperRef}
        className="transition-all w-full h-fit -z-[1] bg-transparent group-hover:blur-[3px] flex md:block justify-center"
      >
        <img
          className="h-full w-full object-cover rounded-2xl bg-transparent"
          src={imagePath}
          width={100}
          height={100}
          alt="Photo de l'artiste"
          loading="lazy"
        />
      </div>
      <div ref={infoRef} className="w-full opacity-0 rounded-md bg-blue/70 bottom-0 p-4 transition-all absolute group-hover:opacity-1">
        <h3 className="text-3xl text-bodyBackground tracking-wider mb-4">{name}</h3>
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-sm w-full text-bodyBackground max-h-40 overflow-y-scroll no-scrollbar mb-6"
        >
          {bio.map((paragraph, idx) => (
            <span key={idx}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
        <div className="w-full flex items-center gap-4">
          {spotifyUrl && (
            <Link href={spotifyUrl}>
              <Spotify className="text-bodyBackground" />
            </Link>
          )}
          {youtubeUrl && (
            <Link href={youtubeUrl}>
              <Youtube className="text-bodyBackground" />
            </Link>
          )}
          {soundcloudUrl && (
            <Link href={soundcloudUrl}>
              <Soundcloud className="text-bodyBackground" />
            </Link>
          )}
          {instagramUrl && (
            <Link href={instagramUrl}>
              <Instagram className="text-bodyBackground" />
            </Link>
          )}
          {facebookUrl && (
            <Link href={facebookUrl}>
              <Facebook className="text-bodyBackground" />
            </Link>
          )}
          {twitterUrl && (
            <Link href={twitterUrl}>
              <Twitter className="text-bodyBackground" />
            </Link>
          )}
          {tiktokUrl && (
            <Link href={tiktokUrl}>
              <Tiktok className="text-bodyBackground" />
            </Link>
          )}
          {threadlUrl && (
            <Link href={threadlUrl}>
              <Thread className="text-bodyBackground" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};