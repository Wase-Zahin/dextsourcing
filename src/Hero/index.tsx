import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {bg} from "../Img/images.tsx";

const slides = [
    {
        kicker: "Dext Sourcing",
        title: "Multinational Apparel Buying-hub, Manufacturer & Exporter",
        photo: 31030995,
    },
    {
        kicker: "Dext Sourcing",
        title: "One-Stop Solution for All Apparel Product Categories",
        photo: 31251577,
    },
    {
        kicker: "Dext Sourcing",
        title: "Woven, Denim, Knit & Sweater Manufacturer",
        photo: 32641555,
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (paused || reduce) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
        return () => clearInterval(id);
    }, [paused]);

    const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

    return (
        <section
            className="relative h-[80vh] min-h-[520px] overflow-hidden bg-[#10304D]"
            aria-roledescription="carousel"
            aria-label="Highlights"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {slides.map((s, i) => (
                <div
                    key={s.title}
                    aria-hidden={i !== index}
                    className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
                        i === index ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{backgroundImage: bg(s.photo, 1920)}}
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-[#10304D]/90 via-[#1B4A72]/60 to-[#00707F]/20"/>

                    <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl text-white">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">{s.kicker}</p>
                            <h2 className="mt-5 font-['Playfair_Display',serif] text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                                {s.title}
                            </h2>
                            <Link
                                to="/about"
                                tabIndex={i === index ? 0 : -1}
                                className="mt-9 inline-block bg-[#00707F] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#1B4A72]"
                            >
                                Discover more
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 hidden -translate-y-1/2 border border-white/40 p-3 text-white transition-colors hover:bg-white hover:text-[#1B4A72] md:block"
            >
                <ChevronLeft size={22}/>
            </button>
            <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 hidden -translate-y-1/2 border border-white/40 p-3 text-white transition-colors hover:bg-white hover:text-[#1B4A72] md:block"
            >
                <ChevronRight size={22}/>
            </button>

            <div className="absolute inset-x-0 bottom-7 flex justify-center gap-2">
                {slides.map((s, i) => (
                    <button
                        key={s.title}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={i === index}
                        className={`h-1.5 transition-all ${i === index ? "w-10 bg-white" : "w-6 bg-white/40 hover:bg-white/70"}`}
                    />
                ))}
            </div>
        </section>
    );
}