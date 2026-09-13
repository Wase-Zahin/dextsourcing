import {useState} from "react";
import {X} from "lucide-react";
import Reveal from "../Reveal";

type WorkImage = {
    src: string;
    tag: string;
};

const images: WorkImage[] = [
    {
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
        tag: "CUTTING \u2014 COTTON TWILL"
    },
    {
        src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1470&auto=format&fit=crop",
        tag: "SEWING LINE"
    },
    {
        src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1470&auto=format&fit=crop",
        tag: "FABRIC INSPECTION"
    },
    {
        src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop",
        tag: "SAMPLE REVIEW"
    },
    {
        src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop",
        tag: "QC \u2014 FINAL CHECK"
    },
    {
        src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1364&auto=format&fit=crop",
        tag: "PACKING FOR FREIGHT"
    },
];

export default function Work() {
    const [selected, setSelected] = useState<WorkImage | null>(null);

    return (
        <section id="work" className="bg-chalk py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <Reveal>
                    <h2 className="f-display font-bold text-3xl md:text-4xl leading-tight mb-12">
                        From the floor
                    </h2>
                </Reveal>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid relative group cursor-pointer rounded-sm overflow-hidden"
                            onClick={() => setSelected(img)}
                        >
                            <img src={img.src} alt={img.tag} className="w-full h-auto object-cover"/>
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2">
                                <span className="f-mono text-[11px] text-canvas tracking-wide">{img.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img src={selected.src} alt={selected.tag} className="w-full h-auto rounded-sm"/>
                        <div className="f-mono text-xs text-canvas mt-3">{selected.tag}</div>
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-3 right-3 bg-canvas/90 text-ink p-2 rounded-sm"
                            aria-label="Close"
                        >
                            <X size={18}/>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}