import {ArrowUpRight} from "lucide-react";

const stats = [
    {v: "300%", l: "Increase in production volume"},
    {v: "50K+", l: "Units delivered on schedule"},
    {v: "0", l: "Quality control failures"},
];

export default function CaseStudy() {
    return (
        <section className="bg-canvas py-20 md:py-28">
            <div
                className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden punch-hole tag-shadow">
                        <img
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop"
                            alt="Fabric cutting table in production"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-ink text-canvas f-mono text-xs px-3 py-2 rounded-sm">
                        REF. CASE-014
                    </div>
                </div>

                <div>
                    <h2 className="f-display font-bold text-3xl md:text-4xl leading-tight mb-5">
                        Scaling a DTC brand from 500 to 50,000 units
                    </h2>
                    <p className="text-graphite leading-relaxed mb-8 max-w-lg">
                        We rebuilt a fast-growing apparel brand's supply chain from the ground up.
                        Within twelve months we tripled production, cut lead times by 40%, and
                        held a 99.8% quality pass rate across every shipment.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mb-9 f-mono">
                        {stats.map((s) => (
                            <div key={s.l} className="border-l-2 border-thread pl-3">
                                <div className="text-xl font-semibold">{s.v}</div>
                                <div className="text-[11px] text-graphite leading-tight mt-1">{s.l}</div>
                            </div>
                        ))}
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 font-semibold border-b-2 border-thread pb-1 hover:gap-3 transition-all"
                    >
                        Read the full story
                        <ArrowUpRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}