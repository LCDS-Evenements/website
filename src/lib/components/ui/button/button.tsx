import type { Component } from "@/lib/utils/component";
import type { Props } from "./button.type";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "rounded-[50px] text-center transition-all duration-300 cursor-pointer font-magicRetro",
  {
    variants: {
      variant: {
        default: "bg-yellow-500 text-blue-950",
        hoverScaleYellow: "bg-yellow-500 hover:scale-110",
        hoverSimpleYellow: "bg-yellow-500 hover:bg-yellow-500/80"
      },
      size: {
        default: " px-5 py-2 text-md md:text-xl",
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

export const Button: Component<Props> = ({ className, variant, size, onClick, children }) => {
  return (
    <button onClick={onClick} className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};