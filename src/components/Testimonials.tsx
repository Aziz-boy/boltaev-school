import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image:
      "https://i.ibb.co/Jw8XR8N1/telegram-cloud-photo-size-2-5235805484945107935-x.jpg",
    name: "Afzalshoh Hojiyev",
    userName: "Toshkent Davlat Yuridik Universiteti",
    comment:
      "Boltayev School o'quv markazi yuqori malakali o'qituvchilar va innovatsion metodlar bilan ta'lim berib, talabalarning huquqshunoslik va tarix sohalarida yuqori natijalarga erishishlariga yordam beradi.",
  },
  {
    image:
      "https://i.ibb.co/3ysyZpGD/telegram-cloud-photo-size-2-5228932888731445180-c.jpg",
    name: "Azizbek Hakimov",
    userName: "@AzizboyFikrlog",
    comment:
      "Boltayev School innovatsion yondashuv va malakali o'qituvchilar bilan ta'lim sohasida yangi standartlar o'rnatmoqda.",
  },
  {
    image:
      "https://i.ibb.co/S7QMC4wh/telegram-cloud-photo-size-2-5235805484945107977-y.jpg",
    name: "Baxshilloyev Inoyat",
    userName: "Buxoro Davlat Universiteti",
    comment:
      "Boltayev Schoolda o‘qish juda qulay, o‘qituvchilar ham juda malakali. Darslar juda aniq va tushunarli bo‘ladi, har doim yordamlashishadi!",
  },
  {
    image:
      "https://i.ibb.co/d0ykpkbC/telegram-peer-photo-size-2-5451812288047739985-1-0-0.jpg",
    name: "Asalbek Sadiyev",
    userName: "INHA University Tashkent",
    comment:
      "Boltayev Schoolning test tuzib beradigan botidan juda mamnunman. Tez va oson test yaratish imkoniyati beradi, darslarga tayyorlanish juda qulay!",
  },
  {
    image:
      "https://i.ibb.co/b50cMsFq/telegram-cloud-photo-size-2-5235805484945108045-x.jpg",
    name: "Jake Smith",
    userName: "INHA University South Korea",
    comment:
      "The guy who made this website is truly a talented guy. He's got real skills and did an amazing job. We were actually classmates back at Inha University, and it’s great to see how far he’s come",
  },
  {
    image:
      "https://i.ibb.co/5WmyYgM3/telegram-cloud-photo-size-2-5226488717332573174-c.jpg",
    name: "Javohir Oromov",
    userName: "TATU",
    comment:
      "Тестовый генератор от Boltayev School — очень полезный инструмент. Идеальное средство для быстрого создания тестов и подготовки к занятиям!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Nima Uchun
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Odamlar{" "}
        </span>
        Ushbu Saytni Yaxshi Ko'rishadi
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Boltayev Kurs Centeri talabalari va mijozlarining fikrlari asosida
        yaratilgan va ularning muvaffaqiyatiga hissa qo'shadi.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>JO</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
