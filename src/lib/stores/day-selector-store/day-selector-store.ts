import { create } from "zustand";
import type { DaySelectorStoreProps } from "./day-selector-store.type";

export const DaySelectorStore = create<DaySelectorStoreProps>((set) => ({
  selectedDay: "TOUS",
  setSelectedDay: (selectedDay) => set({ selectedDay })
}));