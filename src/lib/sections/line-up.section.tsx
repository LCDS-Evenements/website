/* eslint-disable max-len */
import type { ReactElement } from "react";
import React from "react";
import { Selector } from "../components/ui/selector";

const LineUp = (): ReactElement => {
  return (
    <section className="w-screen h-dvh bg-lineup bg-no-repeat bg-cover bg-center px-60 py-28">
      <h2 className="text-center text-5xl text-blue mb-16">LINE UP</h2>
      <div className="w-full">
        <div className="w-full flex items-center gap-3 mb-12">
          <Selector text="TOUS" />
          <Selector text="VENDREDI" />
          <Selector text="SAMEDI" />
        </div>
        <div className="w-full bg-red-500">
          Bonjour le monde je ne sais pas trop quoi dire de plus
        </div>
      </div>
    </section>
  );
};

export default LineUp;