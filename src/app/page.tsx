import type { ReactElement } from "react";
import Home from "@/lib/sections/home.section";
import LineUp from "@/lib/sections/line-up.section";

const MainPage = (): ReactElement => {
  return (
    <main>
      <Home />
      <LineUp />
    </main>
  );
};

export default MainPage;