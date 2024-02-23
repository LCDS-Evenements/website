/* eslint-disable max-len */
import Link from "next/link";
import type { ReactElement } from "react";

const LegalNotice = (): ReactElement => {
  return (
    <section className="w-screen min-h-dvh bg-blueWaves bg-center bg-cover bg-no-repeat py-36 px-60">
      <h2 className="text-center text-3xl md:text-5xl text-bodyBackground mb-14">MENTIONS LÉGALES</h2>
      <div className="flex flex-col items-start justify-center gap-16">
        <div>
          <h4 className="text-2xl text-bodyBackground mb-4">Identité</h4>
          <p className="text-lg text-bodyBackground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Le site www.cuicuitedays.fr (ci-après dénommé le « Site ») est édité et exploité par l&apos;association LCDS Evenements (ci-après dénommée « LCDS Evenements »), association loi 1901, représentée par M. Augustin FOUILLET, en qualité de Président.
          </p>
        </div>
        <div>
          <h4 className="text-2xl text-bodyBackground mb-4">Contact</h4>
          <p className="text-lg text-bodyBackground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Notre service de relations clients est joignable à l&apos;adresse mail suivante : <Link className="text-yellowButton" href="mailto:communication.cuicuitedays@gmail.com">communication.cuicuitedays@gmail.com</Link>
          </p>
        </div>
        <div>
          <h4 className="text-2xl text-bodyBackground mb-4">Hébergeur</h4>
          <p className="text-lg text-bodyBackground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            L’hébergement du site est assuré par : <Link className="text-yellowButton" target="_blank" href="https://github.com">GitHub</Link>.<br />
            Le deploiement du site est assuré par : <Link className="text-yellowButton" target="_blank" href="https://vercel.com">Vercel</Link> Inc, 440 N Barranca Ave #4133, Covina, CA 91723.<br />
            Le nom de domaine est attribuer par <Link className="text-yellowButton" target="_blank" href="https://ovhcloud.com">OVH</Link>, 2 rue Kellermann, 59100 Roubaix, France.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;