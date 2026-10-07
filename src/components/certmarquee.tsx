import {Award} from "lucide-react";
import {certifications} from "./site.ts";

function Row({items, reverse = false}: { items: string[]; reverse?: boolean }) {
    // Render the list twice so the -50% translate loops without a visible jump.
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden">
            <ul className={`flex w-max gap-4 ${reverse ? "dx-marquee-rev" : "dx-marquee"}`}>
                {doubled.map((c, i) => (
                    <li
                        key={`${c}-${i}`}
                        aria-hidden={i >= items.length}
                        className="flex shrink-0 items-center gap-3 border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-[#1B4A72] shadow-sm"
                    >
                        <Award size={18} className="text-[#00707F]" aria-hidden/>
                        {c}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/** Two rows of certification names scrolling in opposite directions. Pauses on hover. */
export default function CertMarquee() {
    const half = Math.ceil(certifications.length / 2);
    return (
        <div
            className="dx-marquee-wrap space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
            aria-label="Certifications and memberships"
        >
            <Row items={certifications.slice(0, half)}/>
            <Row items={certifications.slice(half)} reverse/>
        </div>
    );
}