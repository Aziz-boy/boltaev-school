import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { PenTool } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Boltayev
            </span>{" "}
            School
          </h1>{" "}
          —{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Ingliz tili va huquq
            </span>{" "}
            kurslari markazi
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Huquq, Tarix, IELTS, CEFR va Matematika bo‘yicha sifatli ta’limni biz
          bilan boshlang!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://t.me/+998883070555" // Replace with your actual Telegram channel link
            target="_blank" // Open in a new tab
            rel="noreferrer noopener" // Security for external links
          >
            <Button className="w-full md:w-1/3">Ro‘yxatdan o‘tish</Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="https://Boltayev-school.vercel.app/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Testolog AI
            <PenTool className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
