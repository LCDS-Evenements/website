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
        <div>
          <h4 className="text-2xl text-bodyBackground mb-4">Propriété intellectuelle</h4>
          <p className="text-lg text-bodyBackground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Le Site est une œuvre de l’esprit protégée par la loi. Son contenu, y compris les textes, illustrations, photographies et présentations sont strictement réservés au titre du droit d&apos;auteur ainsi qu&apos;au titre de la propriété intellectuelle.
            L&apos;association LCDS Evenements vous accorde une licence limitée, non-exclusive, révocable, sans droit de sous licencier sur le contenu du Site, et ce, pour les simples accès, navigation et utilisation liés au Site.
            Cette licence ne vous accorde aucun autre droit, en particulier d&apos;exploitation commerciale de ces contenus.
          </p>
        </div>
        <div>
          <h4 className="text-2xl text-bodyBackground mb-4">Marques</h4>
          <p className="text-lg text-bodyBackground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Les dénominations sociales, marques et signes distinctifs figurant sur le Site sont protégés par les lois françaises et internationales. Toute utilisation, reproduction, diffusion ou représentation de tout ou partie d&apos;un des signes précités sans autorisation expresse écrite est interdite.
          </p>
        </div>
        <div>
          <h4 className="text-2xl text-bodyBackground mb-4">Limitation de responsabilité</h4>
          <p className="text-lg text-bodyBackground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Nous nous efforçons d&apos;assurer, au mieux de nos possibilités, l&apos;exactitude et l’actualité des informations diffusées sur le site. Nous nous réservons le droit de corriger et de modifier le contenu du site à tout moment et sans préavis. Il appartient aux visiteurs du Site de vérifier l&apos;information donnée sur le site par d&apos;autres moyens, y compris en nous contactant directement. Nous déclinons toute responsabilité (a) pour toute imprécision, inexactitude ou omission relative aux informations disponibles sur le site, (b) pour les dommages résultant d&apos;une modification des informations figurant sur le site causée par une éventuelle manipulation frauduleuse effectuée par des tiers et (c) pour tous dommages, directs ou indirects, quelles qu&apos;en soient les causes, origines, nature ou conséquences, provoqués à raison de l&apos;accès de quiconque au site ou de l&apos;impossibilité d&apos;y accéder, de même que l&apos;utilisation du Site et/ou du crédit accordé à une quelconque information provenant directement ou indirectement de ce dernier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;