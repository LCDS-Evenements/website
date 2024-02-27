import { create } from "zustand";
import type { IntersectionSponsorsStoreProps } from "./intersection-sponsors-store.type";

export const IntersectionSponsorsStore = create<IntersectionSponsorsStoreProps>((set) => ({
  isIntersecting: false,
  setIsIntersecting: (isIntersecting) => set({ isIntersecting })
}));