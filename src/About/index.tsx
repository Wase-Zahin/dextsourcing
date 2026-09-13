import Reveal from "../Reveal";

const points = [
    "Direct factory partnerships \u2014 no middlemen, no markups",
    "Low MOQs for emerging brands, scale-ready for established ones",
    "One account manager for every project, start to finish",
    "Sustainability-conscious materials and audited production",
];

const testimonials = [
    {
        quote: "They rebuilt our supply chain. The quality and the communication are both unmatched.",
        author: "Sarah L., Aurelia Brand"
    },
    {
        quote: "We scaled from 500 to 50,000 units with zero drop in quality. Real partners, not just a vendor.",
        author: "Michael Chen, Vantage Apparel"
    },
];

export default function About() {
    return (
        <section id="about" className="bg-canvas py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden tag-shadow">
                        <img
                            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1364&auto=format&fit=crop"
                            alt="Apparel manufacturing facility"
                            className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute bottom-4 left-4 right-4 bg-canvas rounded-sm p-4 flex items-center gap-3 tag-shadow">
                            <div
                                className="f-display font-bold text-lg border-2 border-ink rounded-sm w-12 h-12 flex items-center justify-center shrink-0 text-ink">
                                6+
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-ink">Years in the industry</div>
                                <div className="text-xs text-ink/70">Serving brands across 20+ countries</div>
                            </div>
                        </div>
                    </div>

                    <Reveal>
                        <h2 className="f-display font-bold text-3xl md:text-4xl leading-tight mb-5">
                            A sourcing partner you can call at 6pm
                        </h2>
                        <p className="text-graphite leading-relaxed mb-8 max-w-lg">
                            We're not just a supplier — we're the team that catches the fit issue
                            before bulk cutting starts, not after the container ships.
                        </p>
                        <ul className="space-y-3 mb-9">
                            {points.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-sm md:text-base text-ink/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-thread mt-2 shrink-0"/>
                                    {p}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className="inline-block bg-ink text-canvas px-7 py-3.5 rounded-sm font-semibold hover:bg-thread transition-colors"
                        >
                            Get in touch
                        </a>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.author}
                            className="bg-chalk p-7 rounded-sm border-l-2 border-thread tag-shadow-thread"
                            style={{transform: i % 2 === 0 ? "rotate(-0.4deg)" : "rotate(0.4deg)"}}
                        >
                            <p className="text-ink/80 leading-relaxed mb-4">{t.quote}</p>
                            <p className="f-mono text-xs text-graphite">{t.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}