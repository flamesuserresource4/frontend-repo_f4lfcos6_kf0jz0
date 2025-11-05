import { Star, Sun, Snowflake, PawPrint } from "lucide-react";

const BADGE_META = {
  "summer-vibes": { label: "Summer Vibes", icon: Sun, color: "from-amber-300 via-orange-300 to-rose-300" },
  christmas: { label: "Christmas Spirit", icon: Snowflake, color: "from-emerald-300 via-teal-300 to-cyan-300" },
  normal: { label: "Everyday Pal", icon: PawPrint, color: "from-slate-200 via-slate-300 to-slate-200" },
};

export default function PetCard({ imageSrc, badge = "normal", petName, flavorText, rarity = 3 }) {
  const meta = BADGE_META[badge] ?? BADGE_META.normal;
  const Icon = meta.icon;
  const holographic = rarity >= 4;
  const popOut = rarity === 5;

  return (
    <div
      className={`relative w-[400px] h-[500px] select-none`}
      aria-label={`${petName} card`}
      role="img"
    >
      <div
        className={`absolute inset-0 rounded-[22px] bg-white shadow-xl ${
          popOut ? "translate-y-[-6px] shadow-2xl" : ""
        } transition-transform`}
      />
      <div className="absolute inset-0 p-4">
        <div className="relative h-full w-full rounded-[18px] bg-white border border-slate-200 shadow-inner overflow-hidden">
          <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-60 blur-2xl bg-gradient-to-tr ${meta.color}`} />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/80 border border-slate-200 shadow">
              <Icon className="h-5 w-5 text-slate-700" />
            </span>
            <span className="text-xs font-medium text-slate-600 bg-white/70 rounded-full px-2 py-1 border border-slate-200">
              {meta.label}
            </span>
          </div>

          <div className="absolute top-12 left-0 right-0 mx-4">
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src={imageSrc}
                alt={petName}
                className="h-[300px] w-full object-cover object-center"
              />
            </div>
          </div>

          {holographic && (
            <div className="pointer-events-none absolute inset-0 rounded-[18px] mix-blend-soft-light" style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, rgba(255,0,107,0.25), rgba(255,255,255,0.15), rgba(0,212,255,0.25), rgba(255,0,107,0.25))",
              animation: "spin 6s linear infinite",
            }} />
          )}

          <div className="absolute bottom-20 left-0 right-0 px-5">
            <div className="text-center">
              <div className="font-bold text-xl text-slate-800">{petName}</div>
              <div className="mt-1 text-sm italic text-slate-600">{flavorText}</div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-1">
            {Array.from({ length: rarity }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }`}</style>
    </div>
  );
}
