import {useState} from "react";
import {ChevronDown} from "lucide-react";
import Reveal from "../Reveal";

type WhyItem = {
    title: string;
    sla: string;
    body: string;
};

const items: WhyItem[] = [
    {
        title: "Fast turnaround",
        sla: "SLA: 4\u20136 WKS",
        body: "Streamlined sampling and production planning gets most orders delivered in four to six weeks, without cutting quality checks."
    },
    {
        title: "Ethical production",
        sla: "AUDITED",
        body: "We work only with factories that meet international labor and environmental standards, from fiber sourcing to dyeing."
    },
    {
        title: "One account manager",
        sla: "1 POINT OF CONTACT",
        body: "You keep one person from first sample to final shipment — no passing between departments."
    },
    {
        title: "Transparent pricing",
        sla: "LINE-ITEM QUOTES",
        body: "Every quote is broken down by fabric, trim, labor, and freight so you know exactly what you're paying for."
    },
];

export default function WhyUs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-ink bg-grid-dark text-canvas py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <Reveal>
                    <h2 className="f-display font-bold text-3xl md:text-4xl leading-tight mb-5">
                        Built for brands that ask hard questions
                    </h2>
                    <p className="text-canvas/60 leading-relaxed max-w-md">
                        We're not the cheapest quote you'll get, and we're not the biggest factory
                        network. We're the partner who answers before you have to chase us.
                    </p>
                </Reveal>

                <div className="space-y-3">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={item.title}
                                className={`border rounded-sm overflow-hidden ${isOpen ? "border-thread bg-canvas/5" : "border-canvas/15"}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <div className="flex items-center gap-4">
                    <span
                        className="f-mono text-[10px] text-canvas/50 border border-canvas/25 px-2 py-1 rounded-sm shrink-0">
                      {item.sla}
                    </span>
                                        <span className="font-semibold">{item.title}</span>
                                    </div>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${isOpen ? "rotate-180 text-thread" : "text-canvas/40"}`}
                                    />
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-5">
                                        <p className="text-canvas/60 text-sm leading-relaxed pl-1">{item.body}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}