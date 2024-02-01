import type { Component } from "@/lib/utils/component";
import type { Props } from "./artist-card.type";
import Image from "next/image";

export const ArtistCard: Component<Props> = ({ name, bio, day, imagePath, presenceDate }) => {
  return (
    <div className="max-h-fit max-w-full rounded-2xl">
      <Image className="h-full w-full rounded-2xl" src={imagePath} width={100} height={100} alt="Photo de l'artiste" />
    </div>
  );
};