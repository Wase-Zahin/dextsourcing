import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Counter from "../Counter";

export default function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });
    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

    const stats = [
        {v: "6", s: "YRS", l: "In operation"},
        {v: "36", s: "M+", l: "Units shipped"},
        {v: "163", s: "", l: "Factory partners"},
    ];

    return (
        <section ref={targetRef}
                 className="relative bg-ink text-canvas overflow-hidden min-h-[640px] flex items-center">
            {/* Real photography as the primary hero visual */}
            <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop"
                alt="Apparel design and sourcing team reviewing fabric"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(28,27,25,0.96) 0%, rgba(28,27,25,0.9) 45%, rgba(28,27,25,0.55) 70%, rgba(28,27,25,0.25) 100%)",
                }}
            />
            <motion.div style={{y: gridY}} className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none"/>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24 w-full">
                <div className="max-w-xl">
                    <div
                        className="inline-block f-mono text-xs tracking-wide border border-canvas/50 px-2.5 py-1 mb-6 text-canvas/90">
                        SPEC NO. WL-0114 &middot; REV 3
                    </div>
                    <h1
                        className="f-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6"
                        style={{textShadow: "0 2px 12px rgba(0,0,0,0.35)"}}
                    >
                        Every order starts as a tech pack.
                        <br/>
                        We finish it as a shipment.
                    </h1>
                    <p className="text-canvas/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                        Warpline sources fabric, builds samples, and runs production for apparel
                        brands that need a factory partner who answers the phone — not just one
                        who quotes the lowest unit cost.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-14">
                        <a
                            href="#contact"
                            className="bg-thread text-canvas px-7 py-3.5 rounded-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                            Request a quote
                        </a>
                        <a
                            href="#process"
                            className="border border-canvas/30 px-7 py-3.5 rounded-sm font-semibold hover:border-canvas transition-colors"
                        >
                            See our process
                        </a>
                    </div>
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-canvas/15 f-mono max-w-md">
                        {stats.map((stat) => (
                            <div key={stat.l}>
                                <div className="text-2xl md:text-3xl text-canvas">
                                    <Counter value={stat.v}/>
                                    {stat.s}
                                </div>
                                <div className="text-[11px] text-canvas/70 mt-1 tracking-wide">
                                    {stat.l.toUpperCase()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating spec card — the diagram survives as a secondary, tactile detail
          instead of carrying the whole hero, like a spec sheet clipped to a moodboard */}
            <div
                className="hidden md:block absolute bottom-10 right-10 z-10 bg-canvas text-ink rounded-sm p-4 w-[220px] tag-shadow"
                style={{transform: "rotate(-2deg)"}}
            >
                <div className="f-mono text-[10px] text-thread tracking-wide mb-2">SPEC NO. WL-0114</div>
                <svg viewBox="0 0 200 240" className="w-full h-auto" role="img"
                     aria-label="Simplified garment spec diagram">
                    <path
                        d="M70,20 L60,25 L40,45 L35,110 L55,105 L60,90 L58,220 L142,220 L140,90 L145,105 L165,110 L160,45 L140,25 L130,20 L100,35 Z"
                        fill="none"
                        stroke="#1C1B19"
                        strokeWidth={1.5}
                        className="wl-line"
                    />
                    <path d="M100,35 L100,220" fill="none" stroke="#B4392C" strokeWidth={1.5} strokeDasharray="4 5"
                          className="wl-line-fast" style={{animationDelay: "0.5s"}}/>
                    <path d="M42,100 L58,97" fill="none" stroke="#1C1B19" strokeOpacity={0.4} strokeWidth={1}
                          className="wl-line-fast" style={{animationDelay: "0.9s"}}/>
                    <path d="M158,100 L142,97" fill="none" stroke="#1C1B19" strokeOpacity={0.4} strokeWidth={1}
                          className="wl-line-fast" style={{animationDelay: "0.9s"}}/>
                    <path d="M58,208 L142,208" fill="none" stroke="#1C1B19" strokeOpacity={0.4} strokeWidth={1}
                          className="wl-line-fast" style={{animationDelay: "1s"}}/>
                    <text x={4} y="14" className="wl-leader" style={{
                        animationDelay: "1.2s",
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: 8,
                        fill: "#1C1B19",
                        opacity: 0.7
                    }}>
                        STAND COLLAR
                    </text>
                </svg>
                <div className="f-mono text-[10px] text-graphite mt-2">REV 3 &middot; 320GSM FLEECE</div>
            </div>
        </section>
    );
}