import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.ibb.co/9mMZzFBL/telegram-cloud-photo-size-2-5235805484945108131-x.jpg",
    name: "Sobirov Quvonchbek",
    position: "Matematika o'qituvchisi",
    socialNetworks: [
      {
        name: "Telegram",
        url: "https://t.me/sobirov_quvonchbek",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "",
    name: "Jonibek Boltaev",
    position: "Boltaev school Asoschisi",
    socialNetworks: [
      {
        name: "Telegram",
        url: "https://t.me/boltayev_huquq",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Ashley Ross",
    position: "Frontend Developer",
    socialNetworks: [
      {
        name: "Telegram",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Bruce Rogers",
    position: "Backend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size={20} />;
      case "Facebook":
        return <Facebook size={20} />;
      case "Instagram":
        return <Instagram size={20} />;
      case "Telegram":
        return <Send size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Bizning Fidoiy{" "}
        </span>
        Jamoa
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Boltaev Kurs Centeri jamoasi yuqori malakali o'qituvchilar va mutaxassislardan iborat bo'lib, har bir talabaning muvaffaqiyatiga hissa qo'shadi.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  Boltaev Kurs Centeri jamoasi a'zosining har biri o'z sohasida
                  professional va tajribali.
                </p>
              </CardContent>

              <CardFooter>
                <div className="flex gap-2">
                  {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                    <a
                      key={name}
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  ))}
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
