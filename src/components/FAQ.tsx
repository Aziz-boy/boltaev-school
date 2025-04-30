import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Kurslar narxi qancha?",
    answer: "Kurslar narxi tanlangan yo‘nalish va muddatga qarab farqlanadi. Batafsil ma’lumot uchun biz bilan bog‘laning.",
    value: "item-1",
  },
  {
    question: "Online darslar mavjudmi?",
    answer: "Ha, bizda online va offline shaklda darslar mavjud.",
    value: "item-2",
  },
  {
    question: "IELTS tayyorlov kursi qancha davom etadi?",
    answer: "IELTS kursimiz odatda 3 oydan 6 oygacha davom etadi, talabaga qarab moslashtiriladi.",
    value: "item-3",
  },
  {
    question: "CEFR darajalari bo‘yicha kurslar mavjudmi?",
    answer: "Ha, biz A1 dan C1 gacha bo‘lgan CEFR kurslarini taklif etamiz.",
    value: "item-4",
  },
  {
    question: "Huquq va tarix darslari qanday o‘tiladi?",
    answer: "Darslar tajribali o‘qituvchilar tomonidan interaktiv metodlar bilan o‘tiladi. Tayyorlov va tushunishni chuqurlashtirishga e’tibor beriladi.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Tez-tez beriladigan{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          savollar
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Hali ham savollaringiz bormi?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Biz bilan bog‘laning
        </a>
      </h3>
    </section>
  );
};
