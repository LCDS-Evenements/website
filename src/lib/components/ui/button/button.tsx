import type { Component } from "@/lib/utils/component";
import type { Props } from "./button.type";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "rounded-[50px] text-center transition-all duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-yellowButton text-buttonText",
        hoverScaleYellow: "bg-yellowButton hover:scale-110",
        hoverSimpleYellow: "bg-yellowButton hover:bg-yellowButton/80"
      },
      size: {
        default: " px-5 py-2 text-md md:text-xl"
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