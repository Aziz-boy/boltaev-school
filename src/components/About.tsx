import { Statistics } from "./Statistics";
// import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="https://i.ibb.co/m5tH7d64/image.png"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Natijalar{" "}
                </span>
                biz uchun gapiradi 🎓
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Boltayev School — bu huquq, tarix va ingliz tili fanlari
                bo‘yicha ixtisoslashgan zamonaviy ta’lim markazi. Bizning
                o‘quvchilarimiz Tashkent davlat Yuridik universiteti va boshqa
                nufuzli oliy ta’lim muassasalariga muvaffaqiyatli kirib
                bormoqda. <br /> <br /> <br /> Maqsadimiz — har bir o‘quvchining
                intellektual salohiyatini ochish, ularni tanlagan yo‘nalishida
                ishonch bilan olg‘a yurishga tayyorlash. Boltayev School’da
                huquq, tarix, matematika, CEFR, IELTS va ona tili fanlaridan
                yuqori sifatli, tizimli ta’lim taklif etiladi. Har bir fan
                bo‘yicha tajribali ustozlar va amaliy natijaga yo‘naltirilgan
                metodika — bizning asosiy ustunligimizdir.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
