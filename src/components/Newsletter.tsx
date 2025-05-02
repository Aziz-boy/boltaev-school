import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("User subscribed to Telegram updates!");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Maxsus{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Takliflar uchun
          </span>{" "}
           Aloqa
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Website haqidagi fikrlaringizni va maxsus takliflarni dasturchiga bildiring
        </p>

        <div className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2">
          <a
            href="https://t.me/Azizbek_Hakimov" // Replace with your Telegram channel link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white">
              <img
                src="https://i.ibb.co/FqLsPYZR/image.png"
                alt="Telegram"
                className="w-6 h-6 mr-2"
              />
              Telegram orqali bog'lanish
            </Button>
          </a>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
