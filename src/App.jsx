import Header from "./components/Header";
import UploadSection from "./components/UploadSection";
import ExampleCards from "./components/ExampleCards";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-indigo-50">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-4 pt-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Turn pet photos into collectible cards
            </h1>
            <p className="mt-3 text-slate-600">
              Upload a photo and preview the card layout. Backend AI + storage will come next.
            </p>
          </div>
        </section>
        <UploadSection />
        <ExampleCards />
      </main>
      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} PetBadgeCards — Crafted for playful pets and happy humans
        </div>
      </footer>
    </div>
  );
}

export default App;
