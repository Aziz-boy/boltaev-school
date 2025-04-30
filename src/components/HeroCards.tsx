import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://i.ibb.co/1YMgtCps/image.png" />
            <AvatarFallback>BJ</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Boltaev Jonibek</CardTitle>
            <CardDescription>+998(88)307-05-55</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Ta'lim sohasidagi 15 yillik chuqur tajriba va malaka !</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.ibb.co/LDzQGP5h/telegram-peer-photo-size-2-5386448336116105726-1-0-0.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Boltaev School</CardTitle>
          <CardDescription className="font-normal text-primary">
            Ta'lim — muvaffaqiyat kaliti
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>Biz har bir g‘oyani sifatli ta’limga aylantiramiz.</p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://t.me/boltayev_huquq" // O'zingizga mos Telegram manzilini yozing
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Telegram icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>Telegram</title>
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.234 8.11l-1.71 8.077c-.13.582-.47.723-.953.45l-2.64-1.948-1.276 1.23c-.141.14-.26.26-.531.26l.191-2.695 4.905-4.44c.213-.19-.047-.296-.33-.107l-6.056 3.807-2.607-.814c-.567-.177-.578-.567.118-.837l10.18-3.925c.473-.175.889.107.736.836z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Huquq
            <Badge variant="secondary" className="text-sm text-primary">
              Eng mukammal
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">400 000</span>
            <span className="text-muted-foreground"> /so'm</span>
          </div>

          <CardDescription>
            Sifatli taʼlim xarajat talab qiladi, lekin u kelajakni
            shakllantiradi.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Darsga kirish</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Huquq darsliklari",
              "Qonunchilik hujjatlari",
              "Konstitutsiya",
              "Osonlashtirilgan Kodekslar",
              "Huquqiy masalalar",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>
              Huquq va Tarixni o‘rganish bizda yanada osonroq!
            </CardTitle>
            <CardDescription className="text-md mt-2">
              Ilm – insonning eng qudratli qurolidir, u bilan u dunyoni
              o‘zgartirishi mumkin.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
