/* eslint-disable max-len */
import type { ReactElement } from "react";
import React from "react";
import { Selector } from "../components/ui/selector";

const LineUp = (): ReactElement => {
  return (
    <section className="w-screen h-dvh bg-lineup bg-no-repeat bg-cover bg-center px-60 py-28">
      <h2 className="text-center text-5xl text-blue">LINE UP</h2>
      <div className="w-full">
        <div className="w-full flex items-center gap-3">
          <Selector />
        </div>
      </div>
    </section>
  );
};

export default LineUp;