import type { ReactElement } from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/lib/components/ui/accordion";
import { FAQ } from "@/config/faq.config";

const FAQSection = (): ReactElement => {
  return (
    <section id="faq" className="w-screen bg-whiteWaves bg-no-repeat bg-cover bg-center py-28 px-12 md:px-32">
      <div className="w-full h-full flex items-start justify-center">
        <div className="w-1/3 h-full md:block hidden">
          <Image
            src="/illustration/faq-bird.webp"
            alt="Oiseau de la charte graphique des CuicuiteDays"
            width={500}
            height={500}
            className="w-auto h-auto"
          />
        </div>
        <div className="w-full md:w-2/3 h-full">
          <h2 className="text-center md:text-left text-3xl md:text-5xl text-blue-950 uppercase">F.A.Q</h2>
          <div className="w-full h-full flex flex-col items-start justify-center gap-6 mt-16">
            <Accordion type="single" collapsible className="w-full flex flex-col items-center gap-12">
              {FAQ.map((faq, idx) => (
                <AccordionItem key={idx} value={String(idx)} className="w-full">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;