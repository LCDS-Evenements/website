/* eslint-disable max-len */
"use client";

import type { ReactElement } from "react";
import React, { useEffect, useState } from "react";
import { Selector } from "@/lib/components/ui/selector";
import type { Artist } from "@/config/artists.config";
import { artists } from "@/config/artists.config";
import { ArtistCard } from "@/lib/components/artist-card/artist-card";
import { DaySelectorStore } from "@/lib/stores/day-selector-store";

const LineUpSection = (): ReactElement => {
  const selectedDay = DaySelectorStore((state) => state.selectedDay);
  const [artistsList, setArtistsList] = useState<Artist[]>([]);

  useEffect(() => {
    if (selectedDay === "TOUS") {
      setArtistsList(artists);
    } else {
      setArtistsList(artists.filter((artist) => artist.day === selectedDay));
    }
  }, [selectedDay]);

  return (
    <section id="lineup" className="w-screen md:min-h-dvh bg-whiteWaves bg-center bg-auto md:bg-cover bg-repeat md:bg-no-repeat px-0 md:px-60 pb-28 md:pb-32 pt-28 md:pt-32">
      <h2 className="text-center text-3xl md:text-5xl text-blue mb-8 md:mb-16">LINE UP</h2>
      <div className="w-full">
        <div className="w-full flex items-center justify-center md:justify-start gap-3 mb-8">
          <Selector text="TOUS" />
          <Selector text="VENDREDI" />
          <Selector text="SAMEDI" />
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-8 hidden md:flex">
          {artistsList.map((artist, idx) => (
            <ArtistCard
              key={idx}
              name={artist.name}
              bio={artist.bio}
              day={artist.day}
              presenceDate={artist.presenceDate}
              imagePath={artist.imagePath}
              spotifyUrl={artist.spotifyUrl}
              youtubeUrl={artist.youtubeUrl}
              soundcloudUrl={artist.soundcloudUrl}
              instagramUrl={artist.instagramUrl}
              facebookUrl={artist.facebookUrl}
              twitterUrl={artist.twitterUrl}
              tiktokUrl={artist.tiktokUrl}
              threadlUrl={artist.threadlUrl}
              className="max-h-fit max-w-full rounded-2xl group bg-transparent"
            />
          ))}
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-8 md:hidden">
          {artistsList.map((artist, idx) => (
            <ArtistCard
              key={idx}
              name={artist.name}
              bio={artist.bio}
              day={artist.day}
              presenceDate={artist.presenceDate}
              imagePath={artist.imagePath}
              spotifyUrl={artist.spotifyUrl}
              youtubeUrl={artist.youtubeUrl}
              soundcloudUrl={artist.soundcloudUrl}
              instagramUrl={artist.instagramUrl}
              facebookUrl={artist.facebookUrl}
              twitterUrl={artist.twitterUrl}
              tiktokUrl={artist.tiktokUrl}
              threadlUrl={artist.threadlUrl}
              className="h-[70%] w-[70%] rounded-2xl group bg-transparent"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineUpSection;