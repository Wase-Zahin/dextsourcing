import Reveal from "../Reveal";

const certifications = ["BSCI", "WRAP", "GOTS", "OEKO-TEX", "ISO 9001", "SEDEX"];

export default function Certifications() {
    return (
        <section className="bg-tan py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <Reveal className="max-w-xl mb-8">
                    <h2 className="f-display font-bold text-2xl md:text-3xl leading-tight mb-3">
                        Compliance & certifications
                    </h2>
                    <p className="text-ink/70 text-sm md:text-base leading-relaxed">
                        Every factory in our network is audited against these standards before we place an order.
                    </p>
                </Reveal>
                <div className="flex flex-wrap gap-3">
                    {certifications.map((c) => (
                        <span
                            key={c}
                            className="f-mono text-xs bg-canvas border border-ink/20 px-4 py-2 rounded-sm text-ink/75"
                        >
              {c}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}