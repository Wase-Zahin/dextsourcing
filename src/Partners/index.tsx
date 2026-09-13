const partners = ["AURELIA", "VANTAGE", "KESTREL", "NORTH ISLE", "MARLOWE & CO."];

export default function Partners() {
    return (
        <section className="bg-canvas py-14 border-b border-ink/10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <p className="f-mono text-xs text-graphite tracking-wide mb-6 text-center">
                    BRANDS WE'VE SHIPPED FOR
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                    {partners.map((p) => (
                        <span
                            key={p}
                            className="f-display font-semibold text-lg md:text-xl text-ink/35 tracking-wide"
                        >
              {p}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}