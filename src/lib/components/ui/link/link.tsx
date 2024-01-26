import type { Component } from "@/lib/utils/component";
import Link from "next/link";
import type { Props } from "./link.type";
import Image from "next/image";

export const NextLink: Component<Props> = ({ href, text }) => {
  return (
    <div className="group w-fit h-fit relative">
      <Link className="text-xl z-50 relative" href={href}>
        {text}
      </Link>
      <Image
        src={"./illustration/guirlande-hover.svg"}
        alt="Guirlande de fleur qui apparait sous le lien cliquable quand on passe la souris sur le lien"
        width={50}
        height={50}
        className="w-full h-7 absolute -bottom-6 opacity-0 z-20 group-hover:opacity-100 group-hover:-translate-y-5 transition-all duration-500"
      />
    </div>
  );
};