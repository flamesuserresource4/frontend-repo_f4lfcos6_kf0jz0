import PetCard from "./PetCard";

const samples = [
  {
    imageSrc: "https://placekitten.com/600/600",
    badge: "summer-vibes",
    petName: "Sunny Paws",
    flavorText: "Beach-bound whiskers basking under golden rays",
    rarity: 4,
  },
  {
    imageSrc: "https://placekitten.com/601/600",
    badge: "christmas",
    petName: "Holly Meow",
    flavorText: "Jingle-bell jumper posing by twinkling lights",
    rarity: 5,
  },
  {
    imageSrc: "https://placekitten.com/600/601",
    badge: "normal",
    petName: "Buddy",
    flavorText: "Everyday explorer with endlessly curious eyes",
    rarity: 3,
  },
];

export default function ExampleCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold">Example cards</h2>
          <p className="text-sm text-slate-600">Visuals demonstrate the layout, rarity effects, and badge styles.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 place-items-center">
        {samples.map((s, i) => (
          <PetCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
