import type { ReactElement } from "react";
import Image from "next/image";

const Loading = (): ReactElement => {
  return (
    <section className="h-screen w-screen flex items-center justify-center absolute z-50 bg-blueWaves bg-cover bg-center bg-no-repeat">
      <Image
        src="/illustration/white-logo.svg"
        alt="Logo"
        width={200}
        height={200}
        className="animate-pulse"
      />
    </section>
  );
};

export default Loading;