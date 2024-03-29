import type { Component } from "@/lib/utils/component";
import type { Props } from "./button-link.type";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const buttonLinkVariants = cva(
  "rounded-[50px] text-center transition-all duration-300 cursor-pointer font-magicRetro",
  {
    variants: {
      variant: {
        default: "bg-yellow-500 text-blue-950",
        hoverScaleYellow: "bg-yellow-500 hover:scale-110",
        hoverSimpleYellow: "bg-yellow-500 hover:bg-yellow-500/80"
      },
      size: {
        default: "px-5 py-2 text-md md:text-xl",
        small: "px-3 py-1 text-sm md:text-md",
        large: "px-7 py-3 text-lg md:text-2xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export const ButtonLink: Component<Props> = ({ href, className, variant, size, target, children, ...rest }) => {
  return (
    <Link target={target} href={href}>
      <button {...rest} style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className={cn(className, buttonLinkVariants({ variant, size }))}>
        {children}
      </button>
    </Link>
  );
};