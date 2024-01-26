import type { Component } from "@/lib/utils/component";
import Link from "next/link";
import type { Props } from "./link.type";
import Image from "next/image";

export const NextLink: Component<Props> = ({ href, text }) => {
  return (
    <div>
      <Link className="text-xl" href={href}>
        {text}
      </Link>
      <Image
        src={"./illustration/guirlande-hover.svg"}
        alt="Guirlande de fleur qui apparait sous le lien cliquable quand on passe la souris sur le lien"
        width={50}
        height={50}
        className="w-full max-h-fit"
      />
    </div>
  );
};