"use client";

import { useState, type ReactElement } from "react";
import { Button } from "../components/ui/button";

const AftermovieSection = (): ReactElement => {
  const [videoUrl, setVideoUrl] = useState<string>("https://www.youtube.com/embed/B23eCA_GXxU?si=ndkiMthBxff87Vvw");

  const handleClick = (url: string): void => {
    setVideoUrl(url);
  };

  return (
    <section id="aftermovie" className="w-screen h-dvh bg-blueWaves bg-no-repeat bg-cover bg-center py-28 px-60">
      <h2 className="text-center text-5xl text-bodyBackground mb-14">AFTERMOVIE</h2>
      <div className="w-full ">
        <iframe
          width="100%"
          height="500"
          src={videoUrl}
          title="Aftermovie CuicuiteDays"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          onClick={() => void handleClick("https://www.youtube.com/embed/B23eCA_GXxU?si=ndkiMthBxff87Vvw")}
          variant="hoverScaleYellow"
        >
          Édition 2023
        </Button>
        <Button
          onClick={() => void handleClick("https://www.youtube.com/embed/t0_NekCoW0I?si=49xDSyTUQQnf3kO4")}
          variant="hoverScaleYellow"
        >
          Édition 2022
        </Button>
      </div>
    </section>
  );
};

export default AftermovieSection;