/* eslint-disable max-len */
import { cn } from "@/lib/utils";
import type { Component } from "@/lib/utils/component";

type Props = {
  className?: string;
}

const Tiktok: Component<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={cn("icon icon-tabler icon-tabler-brand-tiktok", className)} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
    </svg>
  );
};

export default Tiktok;