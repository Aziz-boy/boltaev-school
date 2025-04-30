import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Moslashuvchan dizayn",
    description:
      "Sayt barcha qurilmalarda to‘liq ishlaydi — telefon, planshet va kompyuterlar uchun moslashtirilgan.",
    image: image4,
  },
  {
    title: "Foydalanuvchiga qulay interfeys",
    description:
      "Oddiy va tushunarli tuzilma — kerakli kurs va ma’lumotni oson topasiz.",
    image: image3,
  },
  {
    title: "Sun’iy intellekt asosidagi tavsiyalar",
    description:
      "Talaba ehtiyojlariga mos kurslarni taklif qilish uchun sun’iy intellekt yondashuvi ishlatilgan.",
    image: image,
  },
];

const featureList: string[] = [
  "Qorong‘i/Yorug‘ rejim",
  "Izohlar",
  "Xususiyatlar",
  "Narxlar",
  "Bog‘lanish formasi",
  "Jamoamiz",
  "Moslashuvchan dizayn",
  "Yangiliklar byulleteni",
  "Minimalistik ko‘rinish",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Ko‘plab{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Ajoyib Xususiyatlar
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="Xususiyat haqida"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
