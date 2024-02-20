/* eslint-disable max-len */
"use client";

import type { Component } from "@/lib/utils/component";
import type { Props } from "./selector.type";
import { DaySelectorStore } from "@/lib/stores/day-selector-store/day-selector-store";
import { cn } from "@/lib/utils";

export const Selector: Component<Props> = ({ text }) => {
  const setSelectedDay = DaySelectorStore((state) => state.setSelectedDay);
  const selectedDay = DaySelectorStore((state) => state.selectedDay);

  const active = "px-5 pt-[5px] pb-[3px] rounded-[50px] border-2 border-blue bg-blue text-bodyBackground font-semibold text-sm md:text-base";
  const unactive = "px-5 pt-[5px] pb-[3px] rounded-[50px] border-2 border-blue font-semibold text-blue text-sm md:text-base hover:bg-blue hover:text-bodyBackground transition-all duration-300 ease-in-out";

  return (
    <button
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className={cn(text === selectedDay ? active : unactive)}
      onClick={() => setSelectedDay(text)}
    >
      {text}
    </button>
  );
};