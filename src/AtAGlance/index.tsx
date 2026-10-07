import {useEffect, useRef, useState} from "react";

const metrics = [
    {label: "R&D and Product Development", value: 100},
    {label: "On time delivery", value: 100},
    {label: "Fast Response & Sample Submission", value: 100},
    {label: "Quality Standard 2.5 AQL", value: 100},
];

const certifications = [
    {name: "Australian Organic", logo: "/src/assets/certs/20230101062447.png"},
    {name: "bluesign", logo: "/src/assets/certs/20230101062504.png"},
    {name: "BSCI", logo: "/src/assets/certs/20230101062519.png"},
    {name: "Fairtrade International", logo: "/src/assets/certs/20230101062536.png"},
    {name: "Fair Wear", logo: "/src/assets/certs/20230101063043.png"},
    {name: "Global Organic Textile Standard", logo: "/src/assets/certs/20230101063115.png"},
    {name: "Green Seal", logo: "/src/assets/certs/20230101063328.png"},
    {name: "Global Recycled Standard", logo: "/src/assets/certs/20230101063500.png"},
    {name: "ICS", logo: "/src/assets/certs/20230101064330.png"},
    {name: "ISO 9001:2015", logo: "/src/assets/certs/20230101064346.png"},
    {name: "Recycled 100", logo: "/src/assets/certs/20230101064455.png"},
    {name: "Recycling", logo: "/src/assets/certs/20230101064529.png"},
    {name: "Repreve", logo: "/src/assets/certs/20230101064540.png"},
    {name: "Sedex", logo: "/src/assets/certs/20230101064555.png"},
    {name: "Standard 100 by Oeko Tex", logo: "/src/assets/certs/20230101064619.png"},
    {name: "U.S. Green Building Council", logo: "/src/assets/certs/20230101064640.png"},
    {name: "WRAP", logo: "/src/assets/certs/20230101064657.png"},
    {name: "ZDHC", logo: "/src/assets/certs/20230101064709.png"},
    {name: "Reach Compliant", logo: "/src/assets/certs/20230101105903.png"},
    {name: "Responsible Care", logo: "/src/assets/certs/20230101105914.png"},
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
        <>
            {/* ========== AT A GLANCE ========== */}
            <section className="overflow-hidden bg-[#1B4A72] py-12 lg:py-16">
                <div
                    ref={ref}
                    className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
                        {/* Left – Title */}
                        <div className="lg:col-span-4">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7DD3D8]">
                                At a glance
                            </p>
                            <h2 className="mt-3 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-white sm:text-4xl">
                                <span className="text-[#7DD3D8]">Dext</span> is Operating In
                                <br/>
                                Apparel Industries
                            </h2>
                        </div>

                        {/* Center – Progress bars */}
                        <div className="lg:col-span-5 space-y-5">
                            {metrics.map((m) => (
                                <div key={m.label}>
                                    <div
                                        className="mb-1.5 flex items-center justify-between text-sm font-medium text-white/90">
                                        <span>{m.label}</span>
                                        <span className="font-semibold">{m.value}%</span>
                                    </div>
                                    <div
                                        className="h-1.5 w-full overflow-hidden rounded-full bg-white/20"
                                        role="progressbar"
                                        aria-label={m.label}
                                        aria-valuenow={m.value}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-[#7DD3D8] to-[#00707F] transition-[width] duration-1000 ease-out motion-reduce:transition-none"
                                            style={{
                                                width: seen ? `${m.value}%` : "0%",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right – Happy Customer card */}
                        <div className="lg:col-span-3 flex justify-center lg:justify-end">
                            <div
                                className="flex items-center gap-4 rounded-lg bg-[#00707F] px-6 py-5 text-white shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 flex-shrink-0 opacity-90"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <div>
                                    <div className="font-['Playfair_Display',serif] text-4xl font-bold leading-none">
                                        15+
                                    </div>
                                    <div className="mt-1 text-sm font-medium opacity-90">
                                        Happy Customer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CERTIFICATIONS SCROLL ========== */}
            <section className="bg-[#F2F6F9] py-8">
                <div className="relative overflow-hidden">
                    {/* Left fade */}
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F2F6F9] to-transparent"/>
                    {/* Right fade */}
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F2F6F9] to-transparent"/>

                    {/* Moving track */}
                    <div
                        className="flex w-max items-center gap-14 py-4"
                        style={{
                            animation: "certification-scroll 40s linear infinite",
                        }}
                    >
                        {/* First set */}
                        {certifications.map((cert) => (
                            <div
                                key={`first-${cert.name}`}
                                className="flex h-20 w-32 flex-shrink-0 items-center justify-center"
                            >
                                <img
                                    src={cert.logo}
                                    alt={cert.name}
                                    className="max-h-16 max-w-[120px] object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                                    loading="lazy"
                                />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {certifications.map((cert) => (
                            <div
                                key={`second-${cert.name}`}
                                className="flex h-20 w-32 flex-shrink-0 items-center justify-center"
                            >
                                <img
                                    src={cert.logo}
                                    alt=""
                                    aria-hidden="true"
                                    className="max-h-16 max-w-[120px] object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes certification-scroll {
                        from { transform: translateX(0); }
                        to   { transform: translateX(calc(-50% - 28px)); }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        [style*="certification-scroll"] {
                            animation: none !important;
                        }
                    }
                `}</style>
            </section>
        </>
    );
}