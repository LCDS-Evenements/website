/* eslint-disable max-len */
import type { ReactElement } from "react";
import React from "react";
import { Selector } from "../components/ui/selector";
import { artists } from "@/config/artists.config";
import { ArtistCard } from "../components/artist-card/artist-card";

const LineUp = (): ReactElement => {
  return (
    <section className="w-screen h-dvh bg-lineup bg-no-repeat bg-cover bg-center px-60 py-28">
      <h2 className="text-center text-5xl text-blue mb-16">LINE UP</h2>
      <div className="w-full">
        <div className="w-full flex items-center gap-3 mb-8">
          <Selector text="TOUS" />
          <Selector text="VENDREDI" />
          <Selector text="SAMEDI" />
        </div>
        <div className="w-full grid grid-cols-3 gap-8">
          {artists.map((artist, idx) => (
            <ArtistCard
              key={idx}
              name={artist.name}
              bio={artist.bio}
              day={artist.day}
              presenceDate={artist.presenceDate}
              imagePath={artist.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineUp;