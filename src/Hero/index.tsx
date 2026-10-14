import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ChevronLeft, ChevronRight} from "lucide-react";

import Img1 from "../assets/img/Towels_at_Sewing_floor.jpg.jpeg";
import Img2 from "../assets/img/Towels_Finishing_floor.jpg.jpeg";
import Img3 from "../assets/img/Sewing.avif";

const slides = [
    {
        kicker: "Dext Sourcing",
        title: "Multinational Apparel Buying-hub, Manufacturer & Exporter",
        photo: Img1,
    },
    {
        kicker: "Dext Sourcing",
        title: "One-Stop Solution for All Apparel Product Categories",
        photo: Img2,
    },
    {
        kicker: "Dext Sourcing",
        title: "Woven, Denim, Knit & Sweater Manufacturer",
        photo: Img3,
    },
];

// const SLIDE_INTERVAL = 3000;

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % slides.length);
        }, 3000);

        return () => window.clearInterval(intervalId);
    }, []);

    const go = (dir: 1 | -1) => {
        setIndex(
            (currentIndex) =>
                (currentIndex + dir + slides.length) % slides.length
        );
    };

    return (
        <section
            className="relative h-[80vh] min-h-[520px] overflow-hidden bg-[#10304D]"
            aria-roledescription="carousel"
            aria-label="Highlights"
        >
            {slides.map((slide, i) => (
                <div
                    key={slide.title}
                    aria-hidden={i !== index}
                    className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
                        i === index
                            ? "opacity-100"
                            : "pointer-events-none opacity-0"
                    }`}
                >
                    {/* Local background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url("${slide.photo}")`,
                        }}
                    />

                    {/* Brand gradient overlay */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-[#10304D]/90 via-[#1B4A72]/60 to-[#00707F]/20"/>

                    {/* Slide content */}
                    <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl text-white">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                                {slide.kicker}
                            </p>

                            <h2 className="mt-5 font-['Playfair_Display',serif] text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                                {slide.title}
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

            {/* Previous slide */}
            <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 border border-white/40 p-3 text-white transition-colors hover:bg-white hover:text-[#1B4A72] md:block"
            >
                <ChevronLeft size={22}/>
            </button>

            {/* Next slide */}
            <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 border border-white/40 p-3 text-white transition-colors hover:bg-white hover:text-[#1B4A72] md:block"
            >
                <ChevronRight size={22}/>
            </button>

            {/* Slide indicators */}
            <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center gap-2">
                {slides.map((slide, i) => (
                    <button
                        key={slide.title}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={i === index ? "true" : undefined}
                        className={`h-1.5 transition-all ${
                            i === index
                                ? "w-10 bg-white"
                                : "w-6 bg-white/40 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}