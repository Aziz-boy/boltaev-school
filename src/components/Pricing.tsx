import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Huquq kursi",
    popular: 1,
    price: 400_000,
    description: "Toshkent Davlat Yuridik Universitetiga tayyorlov kurslari.",
    buttonText: "Ro‘yxatdan o‘tish",
    benefitList: [
      "Tajribalı o‘qituvchilar",
      "Testlar va nazoratlar",
      "Qo‘shimcha materiallar",
      "Telegram orqali maslahatlar",
      "Haftada 6 dars",
    ],
  },
  {
    title: "Tarix kursi",
    popular: 0,
    price: 400_000,
    description:
      "Tarix fanidan DTM va universitet imtihonlariga tayyorlov kursi.",
    buttonText: "Kursga yozilish",
    benefitList: [
      "DTMga mos testlar",
      "Nazorat ishlari",
      "O'qituvchidan shaxsiy feedback",
      "Online va offline rejimlar",
      "Haftada 6 dars",
    ],
  },
  {
    title: "IELTS kursi",
    popular: 0,
    price: 400_000,
    description:
      "IELTS imtihoniga tayyorlanish uchun intensiv kurs. Oylik to‘lov.",
    buttonText: "Boshlash",
    benefitList: [
      "Speaking club",
      "Writing tahlillari",
      "Listening va Reading praktika",
      "Band 6.5+ strategiyasi",
      "Haftada 5-6 dars",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Sizga
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          mos kursni{" "}
        </span>
        tanlang
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Har bir bilim — o‘z vaqtida qilingan eng yaxshi sarmoya.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Eng mashhur
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}so'm</span>
                <span className="text-muted-foreground"> /oylik</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
