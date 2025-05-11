import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Sifatli ta'lim",
    description:
      "Tajribali o‘qituvchilar va zamonaviy metodika asosida sifatli darslar olib boriladi.",
  },
  {
    icon: <MapIcon />,
    title: "Joylashuv qulayligi",
    description:
      "Markazimiz tuman markazida joylashgan, yetib borish oson va qulay.",
  },
  {
    icon: <PlaneIcon />,
    title: "O‘qish vaqti qulay",
    description:
      "Darslar sahar soat 5:30 da boshlanadi. Bu vaqt maktab darslariga xalaqit bermaydi va kuningiz unumli boshlanadi.",
  },
  {
    icon: <GiftIcon />,
    title: "Bonus darslar",
    description:
      "Qo‘shimcha haftalik bepul amaliy mashg‘ulotlar va test sinovlari taqdim etiladi.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Boltayev School{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          qanday ishlaydi
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        O‘quv jarayoni, qulaylik va imkoniyatlar haqida qisqacha ma’lumot.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
