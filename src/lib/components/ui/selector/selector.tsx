/* eslint-disable max-len */
import type { Component } from "@/lib/utils/component";
import type { Props } from "./selector.type";

export const Selector: Component<Props> = ({ text }) => {
  return (
    <button
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="px-5 pt-[5px] pb-[3px] rounded-[50px] border-2 border-blue font-semibold text-blue text-base hover:bg-blue hover:text-bodyBackground transition-all duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};