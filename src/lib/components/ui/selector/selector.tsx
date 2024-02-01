import type { Component } from "@/lib/utils/component";
import type { Props } from "./selector.type";

export const Selector: Component<Props> = () => {
  return (
    <button
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="px-4 pt-[5px] pb-[3px] rounded-full border-2 border-blue"
    >
      TOUS
    </button>
  );
};