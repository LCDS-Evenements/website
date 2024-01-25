import type { Component } from "@/lib/utils/component";
import type { Props } from "./button.type";

export const Button: Component<Props> = ({ text }) => {
  return (
    <button className="bg-yellowButton rounded-[50px] px-5 py-2 text-center text-xl text-buttonText">
      {text}
    </button>
  );
};