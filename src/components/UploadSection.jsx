import { useRef, useState } from "react";
import PetCard from "./PetCard";
import { Upload, ImageOff } from "lucide-react";

const MAX_SIZE_MB = 5;

export default function UploadSection() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [mockData, setMockData] = useState(null);

  function onSelect(e) {
    setError("");
    setMockData(null);
    const f = e.target.files?.[0];
    if (!f) return;
    if (!/(image\/jpeg|image\/png)/.test(f.type)) {
      setError("Please upload a JPG or PNG image.");
      return;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File must be smaller than ${MAX_SIZE_MB}MB.`);
      return;
    }
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  }

  function generatePreview() {
    if (!file) return;
    // Local-only preview data to demonstrate the card layout.
    const name = file.name.replace(/\.[^.]+$/, "").slice(0, 16) || "Your Pet";
    setMockData({
      badge: "normal",
      pet_name: name,
      flavor_text: "Adorable companion ready for badges and glory",
      rarity: 3,
    });
  }

  return (
    <section id="upload" className="mx-auto max-w-6xl px-4 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Upload your pet photo</h2>
          <p className="mt-1 text-sm text-slate-600">
            JPG or PNG, under {MAX_SIZE_MB}MB. After backend setup, your image will be analyzed to produce a themed collectible card.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg"
              onChange={onSelect}
              className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-white hover:file:bg-slate-800"
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm text-white shadow hover:bg-slate-800"
            >
              <Upload className="h-4 w-4" /> Choose file
            </button>
          </div>
          {error && (
            <div className="mt-3 text-sm text-rose-600">{error}</div>
          )}

          <div className="mt-6">
            <button
              type="button"
              disabled={!file}
              onClick={generatePreview}
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Preview Card
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm min-h-[520px] grid place-items-center">
          {!file && (
            <div className="text-center text-slate-500">
              <ImageOff className="mx-auto h-10 w-10 mb-3" />
              <p>Upload an image to see a live preview</p>
            </div>
          )}
          {file && !mockData && (
            <div className="w-[400px] h-[500px] rounded-xl overflow-hidden border border-slate-200 shadow">
              <img src={previewUrl} alt="preview" className="w-full h-full object-cover" />
            </div>
          )}
          {mockData && (
            <PetCard
              imageSrc={previewUrl}
              badge={mockData.badge}
              petName={mockData.pet_name}
              flavorText={mockData.flavor_text}
              rarity={mockData.rarity}
            />
          )}
        </div>
      </div>
    </section>
  );
}
