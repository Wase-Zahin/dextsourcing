import {useEffect, useRef, useState} from "react";

const metrics = [
    {label: "R&D and Product Development", value: 100},
    {label: "On time delivery", value: 100},
    {label: "Fast Response & Sample Submission", value: 100},
    {label: "Quality Standard 2.5 AQL", value: 100},
];

const certifications = [
    "ZDHC",
    "WRAP",
    "U.S. Green Building Council",
    "Standard 100 by Oeko Tex",
    "Sedex",
    "Repreve",
    "Recycling",
    "Reach Compliant",
    "Recycled 100",
    "Responsible Care",
    "ISO 9001:2015",
    "ICS",
    "GRS",
    "Green Seal",
    "Global Organic Textile Standard",
    "Fair Wear",
    "Fairtrade International",
    "BSCI",
    "Bluesign",
    "AOL",
    "Accord",
];

export default function AtAGlance() {
    const ref = useRef<HTMLDivElement>(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSeen(true);
                    io.disconnect();
                }
            },
            {threshold: 0.25}
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className="bg-[#F2F6F9] py-20 lg:py-28">
            <div ref={ref}
                 className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">At a glance</p>
                    <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-[#1B4A72] sm:text-4xl">
                        Dext Sourcing is Operating In Apparel Industries
                    </h2>

                    <ul className="mt-10 space-y-7">
                        {metrics.map((m) => (
                            <li key={m.label}>
                                <div
                                    className="flex items-baseline justify-between text-sm font-semibold text-[#1B4A72]">
                                    <span>{m.label}</span>
                                    <span>{m.value}%</span>
                                </div>
                                <div
                                    className="mt-2 h-3 w-full bg-white"
                                    role="progressbar"
                                    aria-label={m.label}
                                    aria-valuenow={m.value}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    <div
                                        className="h-full bg-gradient-to-r from-[#1B4A72] to-[#00707F] transition-[width] duration-1000 ease-out motion-reduce:transition-none"
                                        style={{width: seen ? `${m.value}%` : "0%"}}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 inline-block bg-[#1B4A72] px-8 py-6 text-white">
                        <span className="font-['Playfair_Display',serif] text-5xl font-bold">40+</span>
                        <span className="ml-3 text-base font-semibold text-white/85">Happy Customer</span>
                    </div>
                </div>

                <div>
                    <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">
                        Certifications &amp; memberships
                    </h3>
                    <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {certifications.map((c) => (
                            <li
                                key={c}
                                className="flex min-h-16 items-center justify-center border border-slate-200 bg-white px-3 text-center text-xs font-bold text-[#1B4A72] transition-colors hover:border-[#00707F] hover:text-[#00707F]"
                            >
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}