import {ClipboardCheck, Factory, type LucideIcon, Ruler, Scissors} from "lucide-react";
import Reveal from "../Reveal";

type ServiceItem = {
    icon: LucideIcon;
    title: string;
    body: string;
};

const items: ServiceItem[] = [
    {
        icon: Ruler,
        title: "Sourcing",
        body: "We vet mills and cut-and-sew factories across South and East Asia, then match you to partners suited to your fabric, MOQ, and price point.",
    },
    {
        icon: Scissors,
        title: "Development",
        body: "Pattern making, grading, and sample rounds, tracked against your tech pack line by line until fit and construction are signed off.",
    },
    {
        icon: Factory,
        title: "Production",
        body: "Bulk cutting and sewing on a locked timeline, with a production manager on the factory floor for every run.",
    },
    {
        icon: ClipboardCheck,
        title: "Inspection",
        body: "AQL-based inspection before goods leave the factory, so problems get caught on the line, not in your warehouse.",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-canvas py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <Reveal className="max-w-xl mb-14">
                    <h2 className="f-display font-bold text-3xl md:text-4xl leading-tight mb-4">
                        What happens between your idea and your inventory
                    </h2>
                    <p className="text-graphite text-base leading-relaxed">
                        Four capabilities, one point of contact — you're never handed off between departments.
                    </p>
                </Reveal>

                <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
                    {items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-8 border-l-2 border-thread pl-6 md:pl-8 hover:bg-chalk/60 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={20} className="text-thread shrink-0"/>
                                    <h3 className="f-display font-semibold text-xl">{item.title}</h3>
                                </div>
                                <p className="text-ink/70 leading-relaxed max-w-xl">{item.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}