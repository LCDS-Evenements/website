import { notFound } from "next/navigation";
import type { ReactElement } from "react";

const NotFoundCatchAll = (): ReactElement => {
  notFound();
};

export default NotFoundCatchAll;