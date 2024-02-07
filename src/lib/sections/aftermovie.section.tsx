import type { ReactElement } from "react";

const AftermovieSection = (): ReactElement => {
  return (
    <section className="w-screen h-dvh bg-whiteWaves bg-no-repeat bg-cover bg-center py-28 px-60">
      <h2 className="text-center text-5xl text-blue mb-16">AFTERMOVIE</h2>
      <div className="w-full ">
        <iframe
          width="100%"
          height="470"
          src="https://www.youtube.com/embed/B23eCA_GXxU?si=ndkiMthBxff87Vvw"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </section>
  );
};

export default AftermovieSection;