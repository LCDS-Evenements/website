import type { Component } from "@/lib/utils/component";
import type { Props } from "./button-link.type";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const buttonLinkVariants = cva(
  "rounded-[50px] text-center transition-all duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-yellowButton text-buttonText",
        hoverScaleYellow: "bg-yellowButton hover:scale-110",
        hoverSimpleYellow: "bg-yellowButton hover:bg-yellowButton/80"
      },
      size: {
        default: " px-5 py-2 text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export const ButtonLink: Component<Props> = ({ text, href, className, variant, size }) => {
  return (
    <Link href={href}>
      <button className={cn(buttonLinkVariants({ variant, size, className }))}>
        {text}
      </button>
    </Link>
  );
};