const materials = [
    {name: "COTTON TWILL", dot: "#3B4A6B"},
    {name: "RIB KNIT", dot: "#4A4A46"},
    {name: "TECH FLEECE", dot: "#6B6660"},
    {name: "SELVEDGE DENIM", dot: "#29344A"},
    {name: "PIQU\u00c9", dot: "#D9CBAE"},
    {name: "PERFORMANCE MESH", dot: "#B4392C"},
    {name: "WASHED CANVAS", dot: "#C9BFA5"},
    {name: "MERINO BLEND", dot: "#A9A29A"},
];

export default function MaterialsStrip() {
    return (
        <section className="bg-chalk bg-grid-light border-b border-ink/10 py-8">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <p className="f-mono text-xs text-graphite tracking-wide mb-4">
                    MATERIALS WE RUN EVERY WEEK
                </p>
                <div className="flex flex-wrap gap-3">
                    {materials.map((m) => (
                        <span
                            key={m.name}
                            className="f-mono text-xs bg-canvas border border-ink/15 px-3 py-1.5 rounded-sm text-ink/70 flex items-center gap-2"
                        >
              <span
                  className="w-2 h-2 rounded-full inline-block border border-ink/20"
                  style={{background: m.dot}}
              />
                            {m.name}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}