import Reveal from "../Reveal";

type Step = {
    n: string;
    title: string;
    body: string;
};

const steps: Step[] = [
    {
        n: "01",
        title: "Costing",
        body: "We review your tech pack, quote fabric and construction, and confirm MOQ before anything is cut."
    },
    {
        n: "02",
        title: "Sampling",
        body: "Proto, fit, and pre-production samples — each round measured against your spec sheet, not eyeballed."
    },
    {
        n: "03",
        title: "Production",
        body: "Bulk cutting and sewing begins once the pre-production sample is signed off in writing."
    },
    {
        n: "04",
        title: "Ship",
        body: "Final inspection, packing to your spec, and freight booked for your delivery window."
    },
];

export default function Process() {
    return (
        <section id="process" className="bg-chalk bg-grid-light py-20 md:py-28 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <Reveal className="max-w-xl mb-16">
                    <h2 className="f-display font-bold text-3xl md:text-4xl leading-tight mb-4">
                        How an order actually moves
                    </h2>
                    <p className="text-graphite text-base leading-relaxed">
                        Four stages, tracked against dates you see from day one.
                    </p>
                </Reveal>

                <div className="relative">
                    <div
                        className="hidden md:block absolute top-7 left-0 right-0 border-t border-dashed border-ink/20"/>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {steps.map((s) => (
                            <div key={s.n} className="relative">
                                <div
                                    className="relative z-10 w-14 h-14 rounded-full border-2 border-ink flex items-center justify-center bg-chalk f-mono font-semibold text-sm"
                                    style={{transform: "rotate(-3deg)"}}
                                >
                                    {s.n}
                                </div>
                                <h3 className="f-display font-semibold text-lg mt-5 mb-2">{s.title}</h3>
                                <p className="text-ink/65 text-sm leading-relaxed">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}