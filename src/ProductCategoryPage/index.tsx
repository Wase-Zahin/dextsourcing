import {useCallback, useEffect, useMemo, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {ArrowLeft, ChevronLeft, ChevronRight, X} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import {Reveal} from "../components/reveal.tsx";
import {getProduct} from "../components/site.ts";

import {knit_tshirt} from "../assets/img/knit-tshirt";
import {knit_fleece} from "../assets/img/knit-fleece";
import {knit_polo} from "../assets/img/knit-polo";
import {knit_others} from "../assets/img/knit-others";
import {knit_hoodie} from "../assets/img/knit-hoodie";
import {knit_trouser} from "../assets/img/knit-trouser";
import {knit_sweatshirt} from "../assets/img/knit-sweatshirt";
import {knit_shorts} from "../assets/img/knit-shorts";

import {woven_others} from "../assets/img/woven-others";
import {woven_shirt} from "../assets/img/woven-shirt";
import {woven_jacket} from "../assets/img/woven-jacket";
import {woven_long_pant} from "../assets/img/woven-long_pant";
import {woven_shorts} from "../assets/img/woven-shorts";

import {sweater_baby} from "../assets/img/sweater-baby";
import {sweater_long} from "../assets/img/sweater-long";
import {sweater_others} from "../assets/img/sweater-others";

import {denim_jacket} from "../assets/img/denim-jacket";
import {denim_ladies} from "../assets/img/denim-ladies";
import {denim_long_pant} from "../assets/img/denim-long_pant";
import {denim_shorts} from "../assets/img/denim-shorts";
import {denim_shirt} from "../assets/img/denim-shirt";
import {denim_others} from "../assets/img/denim-others";

import {towel_terry_kitchen} from "../assets/img/towel-terry_kitchen";
import {towel_others} from "../assets/img/towel-others";
import {towel_bed_spread} from "../assets/img/towel-bed_spread";

import {comboSets} from "../assets/img/sets";

type Group = {
    id: string;
    label: string;
    images: string[];
    kind: "category" | "set";
};

// Display names for the category slugs used in set folder names.
const CATEGORY_NAMES: Record<string, string> = {
    knit: "Knit",
    woven: "Woven",
    sweater: "Sweater",
    denim: "Denim",
};

// Add more groups/categories here as you add image folders.
const galleries: Record<string, { label: string; images: string[] }[]> = {
    knit: [
        {label: "T-shirts", images: knit_tshirt},
        {label: "Polo", images: knit_polo},
        {label: "Hoodie", images: knit_hoodie},
        {label: "Sweatshirt", images: knit_sweatshirt},
        {label: "Trouser", images: knit_trouser},
        {label: "Fleece", images: knit_fleece},
        {label: "Shorts", images: knit_shorts},
        {label: "Others", images: knit_others},
    ],
    woven: [
        {label: "Jacket", images: woven_jacket},
        {label: "Shirt", images: woven_shirt},
        {label: "Shorts", images: woven_shorts},
        {label: "Long Pant", images: woven_long_pant},
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
        {label: "Long Pant", images: denim_long_pant},
        {label: "Shirt", images: denim_shirt},
        {label: "Others", images: denim_others},
    ],
    "hometextile-other": [
        {label: "Terry Kitchen", images: towel_terry_kitchen},
        {label: "Bed Spread", images: towel_bed_spread},
        {label: "Others", images: towel_others},
    ],
};

// Own groups of a category + every combo set that includes this category.
function getGroups(slug?: string): Group[] {
    if (!slug) return [];

    const own: Group[] = (galleries[slug] ?? []).map((g) => ({
        id: `cat:${g.label}`,
        label: g.label,
        images: g.images,
        kind: "category",
    }));

    const sets: Group[] = comboSets
        .filter((s) => s.categories.includes(slug))
        .map((s) => ({
            id: `set:${s.id}`,
            label: s.categories.map((c) => CATEGORY_NAMES[c] ?? c).join(" + "),
            images: s.images,
            kind: "set",
        }));

    return [...own, ...sets];
}

const ALL = "all";
const ALL_SETS = "sets";

export default function ProductPage() {
    const {slug} = useParams();
    const product = getProduct(slug);

    const groups = useMemo(() => getGroups(slug), [slug]);
    const categoryGroups = useMemo(() => groups.filter((g) => g.kind === "category"), [groups]);
    const setGroups = useMemo(() => groups.filter((g) => g.kind === "set"), [groups]);

    const [active, setActive] = useState<string>(ALL);
    const [lightbox, setLightbox] = useState<number | null>(null);

    const images = useMemo(() => {
        let selected = groups;
        if (active === ALL_SETS) selected = setGroups;
        else if (active !== ALL) selected = groups.filter((g) => g.id === active);
        return selected.flatMap((g) => g.images.map((src) => ({src, label: g.label})));
    }, [groups, setGroups, active]);

    const total = groups.reduce((n, g) => n + g.images.length, 0);
    const setsTotal = setGroups.reduce((n, g) => n + g.images.length, 0);

    useEffect(() => {
        setActive(ALL);
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

    const tabClass = (isActive: boolean, tone: "navy" | "teal") => {
        const activeBg = tone === "navy" ? "bg-[#1B4A72] text-white" : "bg-[#00707F] text-white";
        const idle =
            tone === "navy"
                ? "bg-slate-100 text-[#1B4A72] hover:bg-slate-200"
                : "border border-[#00707F]/40 bg-white text-[#00707F] hover:bg-[#00707F]/10";
        return `px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? activeBg : idle}`;
    };

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
                                <div className="mb-10 space-y-4">
                                    <div className="flex flex-wrap justify-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setActive(ALL)}
                                            className={tabClass(active === ALL, "navy")}
                                        >
                                            All <span className="opacity-60">({total})</span>
                                        </button>
                                        {categoryGroups.map((g) => (
                                            <button
                                                key={g.id}
                                                type="button"
                                                onClick={() => setActive(g.id)}
                                                className={tabClass(active === g.id, "navy")}
                                            >
                                                {g.label} <span className="opacity-60">({g.images.length})</span>
                                            </button>
                                        ))}
                                    </div>

                                    {setGroups.length > 0 && (
                                        <div className="flex flex-wrap items-center justify-center gap-3">
                                            <span
                                                className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                                                Sets
                                            </span>
                                            {setGroups.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => setActive(ALL_SETS)}
                                                    className={tabClass(active === ALL_SETS, "teal")}
                                                >
                                                    All Sets <span className="opacity-60">({setsTotal})</span>
                                                </button>
                                            )}
                                            {setGroups.map((g) => (
                                                <button
                                                    key={g.id}
                                                    type="button"
                                                    onClick={() => setActive(g.id)}
                                                    className={tabClass(active === g.id, "teal")}
                                                >
                                                    {g.label} <span className="opacity-60">({g.images.length})</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
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