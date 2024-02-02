/* eslint-disable max-len */
import { cn } from "@/lib/utils";
import type { Component } from "@/lib/utils/component";

type Props = {
  className?: string;
}
const Facebook: Component<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={cn("icon icon-tabler icon-tabler-brand-facebook", className)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
  );
};

export default Facebook;