import { PawPrint } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-400 via-fuchsia-400 to-indigo-400 grid place-items-center shadow">
            <PawPrint className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">PetBadgeCards</span>
        </div>
        <nav className="text-sm text-slate-600">
          <ul className="flex items-center gap-5">
            <li className="hidden sm:block">Make delightful collectible cards of your pet</li>
            <li>
              <a
                href="#upload"
                className="inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-white shadow hover:bg-slate-800 transition"
              >
                Start
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
