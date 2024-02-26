import type { ReactElement } from "react";
import { LoaderIcon } from "lucide-react";

const Loading = (): ReactElement => {
  return (
    <section className="h-screen w-screen flex items-center justify-center absolute z-50 bg-blue">
      <LoaderIcon className="animate-spin w-14 h-14 text-bodyBackground" />
    </section>
  );
};

export default Loading;