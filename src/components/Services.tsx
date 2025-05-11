import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string; // Adding the link property
}

const serviceList: ServiceProps[] = [
  {
    title: "Tarix bo'yicha testlar yaratish uchun AI",
    description:
      "Tarix bo'yicha testlarni tuzib beradigan  AI ham mavjud bo'lib, u orqali testlarni tez va oson yaratishingiz mumkin. Batafsil ma'lumot uchun quyidagi havolaga qarang:",
    link: "https://Boltayev-school.vercel.app/",
    icon: <ChartIcon />,
  },
  {
    title: "College Cunseling",
    description:
      "Chet davlatda o'qish uchun ariza topshirish jarayonini osonlashtirish va sizga eng mos universitetlarni topishga yordam berish.",
    link: "https://t.me/College_counseling",
    icon: <WalletIcon />,
  },
  {
    title: "Barcha tarix va Huquq darsliklar",
    description:
      "Bizning platformamizda barcha tarix va huquq darsliklari mavjud. Siz o'zingizga kerakli darslikni topishingiz mumkin.",
    link: "https://t.me/boltayev_huquq",
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
              O'quvchilar uchun{" "}
            </span>
            qulayliklar
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Biz o'quvchilarimizga eng yaxshi xizmatni taqdim etishga intilamiz,
            innovatsion yechimlar bilan.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(
              ({ icon, title, description, link }: ServiceProps) => (
                <Card key={title}>
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                      {icon}
                    </div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="text-md mt-2">
                        {description}{" "}
                        <a
                          href={link}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Batafsil ma'lumot
                        </a>
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            )}
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
