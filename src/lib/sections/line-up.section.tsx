/* eslint-disable max-len */
"use client";

import type { ReactElement } from "react";
import React, { useEffect, useState } from "react";
import { Selector } from "../components/ui/selector";
import type { Artist } from "@/config/artists.config";
import { artists } from "@/config/artists.config";
import { ArtistCard } from "../components/artist-card/artist-card";
import { DaySelectorStore } from "../stores/day-selector-store";

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
    <section className="w-screen min-h-dvh bg-lineup bg-no-repeat bg-cover bg-center px-60 pb-28 pt-56">
      <h2 className="text-center text-5xl text-blue mb-16">LINE UP</h2>
      <div className="w-full">
        <div className="w-full flex items-center gap-3 mb-8">
          <Selector text="TOUS" />
          <Selector text="VENDREDI" />
          <Selector text="SAMEDI" />
        </div>
        <div className="w-full h-fit grid grid-cols-3 gap-8">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineUpSection;