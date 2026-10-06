const stats = [
    {value: "40+", label: "Trusted Clients"},
    {value: "5000", label: "Shipments", note: "More than"},
    {value: "13+", label: "Years Of Experience"},
    {value: "45", label: "Visited Conference"},
    {value: "13+", label: "Compliance Factories"},
    {value: "1M", label: "pcs/month production"},
];

export default function Stats() {
    return (
        <section className="bg-[#1B4A72] py-16 text-white lg:py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Dext Sourcing</p>
                    <h2 className="mt-3 font-['Playfair_Display',serif] text-3xl font-bold sm:text-4xl">
                        We are in apparel industries
                    </h2>
                </div>

                <dl className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`flex flex-col items-center px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}
                        >
                            <span className="h-4 text-xs text-white/60">{s.note ?? ""}</span>
                            <dd className="order-2 font-['Playfair_Display',serif] text-5xl font-bold">{s.value}</dd>
                            <dt className="order-3 mt-2 text-sm font-semibold text-white/80">{s.label}</dt>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}