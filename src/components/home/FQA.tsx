import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQContent } from "@/lib/data/landingpage_FAQ";
import { Card } from "../ui/card";

export default function FQAComponent() {
  return (
    <MaxWidthWrapper>
      <div id="FQA"></div>

      <div className="h-[calc(8vh)]"></div>

      <div className="mb-3 md:mb-6">
        <div className="mb-3 font-bold text-purple-700 text-4xl md:text-5xl">
          FAQ
        </div>
        <div className="font-semibold text-lg md:text-lg">
          Perhape there are answer of your question
        </div>
        <div className="mb-3 text-base">
          Increases productivity by reducing repetitive processes and freeing up
          time for high-value activities
        </div>
      </div>

      <Card className="p-10 rounded-2xl">
        <Accordion type="single" collapsible className="w-full gap-4">
          {FAQContent.data.map((data, index) => (
            <AccordionItem key={index} value={`item-${data.index}`}>
              <AccordionTrigger>{data.Q}</AccordionTrigger>
              <AccordionContent className="text-start">
                {data.A}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <div className="h-[calc(8vh)]"></div>
    </MaxWidthWrapper>
  );
}
