import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Barcha
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              G‘oyalar va Rejalar{" "}
            </span>
            Bitta Platformada
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Boltayev School sizga kerakli barcha ta’lim yo‘nalishlarini bir
            joyda taqdim etadi: Ingliz tili, IELTS, CEFR, huquq, tarix
            matematika, ona tili. O‘rganishni biz bilan boshlang!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            href="https://t.me/+998883070555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full md:mr-4 md:w-auto">
              Demo darsga qatnashish
            </Button>
          </a>

          <a
            href="https://t.me/Boltayev_huquq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full md:w-auto">
              Bizni kuzatish
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
