import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Onlayn Darslarni Hamkorlikda Yaratish",
    description:
      "Bizning platformamiz orqali darslar yaratishda birgalikda ishlash, o'quvchilar va o'qituvchilar o'rtasida samarali hamkorlikni ta'minlash.",
    icon: <ChartIcon />,
  },
  {
    title: "O'quv Dasturlarini Boshqarish",
    description:
      "O'quv dasturlarini boshqarish va ularga moslashtirilgan yondashuvlar orqali o'quvchilarga eng yaxshi ta'limni taqdim etish.",
    icon: <WalletIcon />,
  },
  {
    title: "Vazifalarni Avtomatlashtirish",
    description:
      "Darslar va o'quv vazifalarini avtomatlashtirish orqali o'qituvchilar va o'quvchilarning vaqtini tejash va samaradorlikni oshirish.",
    icon: <MagnifierIcon />,
  },
];


export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Mijozlarga Yo‘naltirilgan{" "}
            </span>
            Xizmatlar
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Biz mijozlarimizga eng yaxshi xizmatni taqdim etishga intilamiz,
            innovatsion yechimlar bilan.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Xizmatlar haqida"
        />
      </div>
    </section>
  );
};
