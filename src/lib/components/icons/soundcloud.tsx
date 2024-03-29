/* eslint-disable max-len */
import { cn } from "@/lib/utils";
import type { Component } from "@/lib/utils/component";

type Props = {
  className?: string;
}

const Soundcloud: Component<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={cn("icon icon-tabler icon-tabler-brand-soundcloud", className)} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" /><path d="M9 8l0 9" /><path d="M6 17l0 -7" /><path d="M3 16l0 -2" /></svg>
  );
};

export default Soundcloud;