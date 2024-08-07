import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "../../../constants";

type FAQITEM = {
  question: string;
  answer: string;
};

const ReviewItem = ({ question, answer }: FAQITEM) => {
  return (
    <AccordionItem
      value={question}
      className="py-5 md:py-10 border border-solid border-[#E1E1E1] rounded-2xl px-6 mb-5 md:mb-10 w-full text-base md:text-2xl"
    >
      <AccordionTrigger className="text-left text-[#5D5F61]">{question}</AccordionTrigger>
      <AccordionContent className="text-base md:text-2xl">{answer}</AccordionContent>
    </AccordionItem>
  );
};

const FAQ = () => {
  return (
    <section className="max-container padding-container">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">FAQS</h1>
      <p className="text-xs md:text-base lg:text-2xl pt-3 md:pt-6">
        Maybe We Can Answer Your Questions
      </p>
      <div className="mt-7">
        <Accordion type="single" collapsible>
          {FAQS.map((faq) => (
            <ReviewItem
              question={faq.question}
              answer={faq.answer}
              key={faq.question}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
