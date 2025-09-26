
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData } from '@/lib/data';

export default function FAQPage() {
  return (
    <div className="container py-16 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Find answers to common questions about our services and processes.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-card border-border/60 rounded-lg px-6">
              <AccordionTrigger className="text-base font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
