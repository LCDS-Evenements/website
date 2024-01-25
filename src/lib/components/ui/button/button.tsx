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
        hoverYellow: "bg-yellowButton hover:scale-110"
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

export const Button: Component<Props> = ({ text, className, variant, size }) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
      {text}
    </button>
  );
};