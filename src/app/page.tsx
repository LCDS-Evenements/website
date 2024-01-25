import type { ReactElement } from "react";
import Home from "@/lib/sections/home.section";
import Test from "@/lib/sections/test.section";

const MainPage = (): ReactElement => {
  return (
    <main>
      <Home />
      <Test />
    </main>
  );
};

export default MainPage;