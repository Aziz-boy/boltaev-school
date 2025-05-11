interface SponsorProps {
  imageUrl?: string; // optional image
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    imageUrl: "https://i.ibb.co/DPzt2pmG/College-Counsellingnew-LOGO.png",
    name: "CollegeCounselling",
  },
  {
    imageUrl: "https://i.ibb.co/F4ZKVFyK/intelect-logo.jpg",
    name: "Intellect",
  },
  {
    imageUrl:
      "https://i.ibb.co/j9DmGHZZ/telegram-cloud-photo-size-2-5231000979908982352-x.jpg",
    name: "Forever Study",
  },
  {
    name: "Friday Talks",
  },
  {
    imageUrl:
      "https://i.ibb.co/6JFDfb5v/telegram-cloud-photo-size-2-5231000979908982347-x.jpg",
    name: "Boltayev School",
  },
  {
    name: "SkillSwap",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Hamkorlar
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ imageUrl, name }) => (
          <div
            key={name}
            className="flex items-center gap-2 text-muted-foreground/60"
          >
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="h-10 object-contain" />
            ) : (
              <h3 className="text-xl font-bold">{name}</h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
