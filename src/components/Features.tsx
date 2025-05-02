import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Irzayeva E'zoza",
    description: "Toshkent davlat yuridik Universiteti 181.70 ball ",
    image: "https://i.ibb.co/xKnvhrRP/image.png",
  },
  {
    title: "Samadov Azizbek",
    description: "Jahoniy iqtisodiyot va diplomatiya 185.70 ball",
    image: "https://i.ibb.co/sv3z4chF/image.png",
  },
  {
    title: "Rasulov Umid",
    description: "Oliy harbiy ta'lim muassasasi 172.20 ball",
    image: "https://i.ibb.co/xKVtgV0B/image.png",
  },
  {
    title: "Yarashov Rahmatjon",
    description:
      "Toshkent davlat yuridik universiteti 187.90 ball",
    image: "https://i.ibb.co/nq6hJXtc/telegram-cloud-photo-size-2-5424992141429562924-y.jpg",
  },
  {
    title: "Rayimova Moxinabonu",
    description:
      "Milliy Sertifikat tarix A daraja 100% ko'rsatkich",
    image: "https://i.ibb.co/YFJZqqFY/image.png",
  },
  {
    title: "Yarashov Rahmatjon",
    description:
      "Milliy Sertifikat tarix A daraja 100% ko'rsatkich",
    image: "https://i.ibb.co/HL49NcdF/image.png",
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
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Bizning{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Natijalar
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
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
