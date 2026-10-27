import {useCallback, useEffect, useMemo, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {ArrowLeft, ChevronLeft, ChevronRight, X} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import {Reveal} from "../components/reveal.tsx";
import {getProduct} from "../components/site.ts";

import {tshirt} from "../assets/img/tshirt";
import {fleece} from "../assets/img/fleece";
import {knit_others} from "../assets/img/knit-others";

import {woven_cargo} from "../assets/img/woven-cargo";
import {woven_others} from "../assets/img/woven-others";
import {woven_shirt} from "../assets/img/woven-shirt";
import {woven_jacket} from "../assets/img/woven-jacket";
import {woven_trousers} from "../assets/img/woven-trousers";
import {woven_shorts} from "../assets/img/woven-shorts";

import {sweater_baby} from "../assets/img/sweater-baby";
import {sweater_long} from "../assets/img/sweater-long";
import {sweater_others} from "../assets/img/sweater-others";

import {denim_jacket} from "../assets/img/denim-jacket";
import {denim_ladies} from "../assets/img/denim-ladies";
import {denim_long} from "../assets/img/denim-long";
import {denim_shorts} from "../assets/img/denim-shorts";
import {denim_pant} from "../assets/img/denim-pant";
import {denim_others} from "../assets/img/denim-others";

import {towel_terry_kitchen} from "../assets/img/towel-terry_kitchen";
import {towel_others} from "../assets/img/towel-others";
import {towel_bed_spread} from "../assets/img/towel-bed_spread";

type Group = { label: string; images: string[] };

// Add more groups/categories here as you add image folders.
const galleries: Record<string, Group[]> = {
    knit: [
        {label: "T-shirts", images: tshirt},
        {label: "Fleece", images: fleece},
        {label: "Others", images: knit_others},

    ],
    woven: [
        {label: "Cargo", images: woven_cargo},
        {label: "Jacket", images: woven_jacket},
        {label: "Shirt", images: woven_shirt},
        {label: "Shorts", images: woven_shorts},
        {label: "Trouser", images: woven_trousers},
        {label: "Others", images: woven_others},
    ],
    sweater: [
        {label: "Baby", images: sweater_baby},
        {label: "Long", images: sweater_long},
        {label: "Others", images: sweater_others},
    ],
    denim: [
        {label: "Jacket", images: denim_jacket},
        {label: "Ladies", images: denim_ladies},
        {label: "Shorts", images: denim_shorts},
        {label: "Long", images: denim_long},
        {label: "Pants", images: denim_pant},
        {label: "Others", images: denim_others},
    ],
    "hometextile-other": [
        {label: "Terry Kitchen", images: towel_terry_kitchen},
        {label: "Bed Spread", images: towel_bed_spread},
        {label: "Others", images: towel_others},
    ],
};

export default function ProductPage() {
    const {slug} = useParams();
    const product = getProduct(slug);
    const groups = (slug && galleries[slug]) || [];

    const [active, setActive] = useState<string>("All");
    const [lightbox, setLightbox] = useState<number | null>(null);

    const images = useMemo(() => {
        if (active === "All") return groups.flatMap((g) => g.images.map((src) => ({src, label: g.label})));
        const g = groups.find((x) => x.label === active);
        return (g?.images ?? []).map((src) => ({src, label: g!.label}));
    }, [groups, active]);

    const total = groups.reduce((n, g) => n + g.images.length, 0);

    useEffect(() => {
        setActive("All");
        setLightbox(null);
    }, [slug]);

    const close = useCallback(() => setLightbox(null), []);
    const prev = useCallback(
        () => setLightbox((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
        [images.length],
    );
    const next = useCallback(
        () => setLightbox((i) => (i === null ? i : (i + 1) % images.length)),
        [images.length],
    );

    useEffect(() => {
        if (lightbox === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [lightbox, close, prev, next]);

    if (!product) {
        return (
            <section className="bg-white py-32 text-center">
                <h1 className="font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72]">Product not found</h1>
                <Link to="/products" className="mt-6 inline-block font-semibold text-[#00707F]">
                    Back to products
                </Link>
            </section>
        );
    }

    return (
        <>
            <PageHeader
                title={product.title}
                photo={product.photo}
                subtitle={product.tagline}
                crumbs={[{label: "Products", to: "/products"}, {label: product.title}]}
            />

            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    {total === 0 ? (
                        <p className="py-20 text-center text-slate-500">Photos for this category are coming soon.</p>
                    ) : (
                        <>
                            {groups.length > 1 && (
                                <div className="mb-10 flex flex-wrap justify-center gap-3">
                                    {[{label: "All", count: total}, ...groups.map((g) => ({
                                        label: g.label,
                                        count: g.images.length
                                    }))].map((t) => (
                                        <button
                                            key={t.label}
                                            type="button"
                                            onClick={() => setActive(t.label)}
                                            className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                                                active === t.label
                                                    ? "bg-[#1B4A72] text-white"
                                                    : "bg-slate-100 text-[#1B4A72] hover:bg-slate-200"
                                            }`}
                                        >
                                            {t.label} <span className="opacity-60">({t.count})</span>
                                        </button>
                                    ))}
                                </div>
                            )}

                            <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                                {images.map((img, i) => (
                                    <Reveal as="li" key={img.src} delay={(i % 4) * 60}>
                                        <button
                                            type="button"
                                            onClick={() => setLightbox(i)}
                                            className="group relative block aspect-[3/4] w-full overflow-hidden bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                            aria-label={`View ${img.label} photo ${i + 1}`}
                                        >
                                            <img
                                                src={img.src}
                                                alt={`${product.title} - ${img.label} ${i + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                                            />
                                        </button>
                                    </Reveal>
                                ))}
                            </ul>
                        </>
                    )}

                    <div className="mt-14 text-center">
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1B4A72] transition-colors hover:text-[#00707F]"
                        >
                            <ArrowLeft size={16} aria-hidden/> All products
                        </Link>
                    </div>
                </div>
            </section>

            {lightbox !== null && images[lightbox] && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close"
                        className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                    >
                        <X size={22}/>
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        aria-label="Previous"
                        className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
                    >
                        <ChevronLeft size={26}/>
                    </button>
                    <img
                        src={images[lightbox].src}
                        alt={`${product.title} - ${images[lightbox].label}`}
                        className="max-h-[88vh] max-w-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        aria-label="Next"
                        className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
                    >
                        <ChevronRight size={26}/>
                    </button>
                    <p className="absolute bottom-4 text-sm text-white/70">
                        {lightbox + 1} / {images.length}
                    </p>
                </div>
            )}
        </>
    );
}