import type { ReactElement } from "react";

const Map = (): ReactElement => {
  return (
    <section className="w-screen md:min-h-dvh bg-blueWaves bg-center bg-auto md:bg-cover bg-repeat md:bg-no-repeat py-36 px-10 md:px-60">
      <h2 className="text-center text-3xl md:text-5xl text-bodyBackground mb-14 uppercase">Carte du monde</h2>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1ywpZB_bENrg6tFh-MMNmaLDMNS48BpI&ehbc=2E312F"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[35rem] rounded-md border-2 border-bodyBackground"
      />
    </section>
  );
};

export default Map;