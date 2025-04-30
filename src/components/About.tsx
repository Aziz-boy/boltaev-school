import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Biz{" "}
                </span>
                Haqimizda
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Boltaev School — bu zamonaviy yondashuv asosida ta’lim beruvchi
                kurs markazi. Biz Ingliz Tili, IELTS, CEFR, Huquq va Tarix
                fanlari bo‘yicha yuqori sifatli darslar taklif etamiz.
                Maqsadimiz — har bir o‘quvchining bilim va ko‘nikmalarini
                rivojlantirish orqali ularni kelajakdagi muvaffaqiyatga
                tayyorlash.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
