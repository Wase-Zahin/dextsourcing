import {useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Plus, Search} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import CertMarquee from "../components/certmarquee.tsx";
import {Reveal} from "../components/reveal.tsx";
import {faqs} from "../components/site.ts";

export default function Faq() {
    const [open, setOpen] = useState<number | null>(0);
    const [query, setQuery] = useState("");

    const items = useMemo(() => {
        const q = query.trim().toLowerCase();
        return faqs
            .map((f, i) => ({...f, n: i + 1}))
            .filter((f) => !q || f.q.toLowerCase().includes(q) || f.a.join(" ").toLowerCase().includes(q));
    }, [query]);

    return (
        <>
            <PageHeader
                title="Frequently Asked Questions"
                photo={31251573}
                subtitle="Order quantities, samples, lead times, payment and shipping, answered in one place."
                crumbs={[{label: "FAQ"}]}
            />

            <section className="bg-white py-20 lg:py-28">
                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">Most Frequently Asked
                            Questions</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72] sm:text-4xl">How
                            can we help?</h2>
                    </Reveal>

                    <Reveal delay={100}>
                        <label className="relative mt-10 block">
                            <span className="sr-only">Search the FAQ</span>
                            <Search size={20} aria-hidden
                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search questions, e.g. MOQ, payment, lead time"
                                className="w-full border border-slate-300 bg-[#F2F6F9] py-4 pl-12 pr-4 outline-none transition-colors placeholder:text-slate-400 focus:border-[#00707F] focus:bg-white focus:ring-2 focus:ring-[#00707F]/20"
                            />
                        </label>
                    </Reveal>

                    <ul className="mt-8 space-y-3" aria-live="polite">
                        {items.map((f) => {
                            const isOpen = open === f.n;
                            return (
                                <li key={f.n}
                                    className={`border transition-colors ${isOpen ? "border-[#00707F] bg-white shadow-lg" : "border-slate-200 bg-[#F2F6F9]"}`}>
                                    <h3>
                                        <button
                                            type="button"
                                            onClick={() => setOpen(isOpen ? null : f.n)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-${f.n}`}
                                            className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                                        >
                                            <span
                                                className="font-['Playfair_Display',serif] text-2xl font-bold text-[#00707F]/50">{String(f.n).padStart(2, "0")}</span>
                                            <span className="flex-1 font-bold text-[#1B4A72]">{f.q}</span>
                                            <span
                                                className={`flex h-9 w-9 shrink-0 items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45 bg-[#00707F] text-white" : "bg-white text-[#1B4A72]"}`}>
                        <Plus size={18} aria-hidden/>
                      </span>
                                        </button>
                                    </h3>
                                    <div
                                        id={`faq-${f.n}`}
                                        role="region"
                                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                        style={{
                                            visibility: isOpen ? "visible" : "hidden",
                                            transition: `grid-template-rows 300ms ease-out, visibility 0s linear ${isOpen ? 0 : 300}ms`
                                        }}
                                    >
                                        <div className="overflow-hidden">
                                            <div
                                                className="space-y-3 px-5 pb-6 pl-[4.5rem] leading-relaxed text-slate-600 sm:px-6 sm:pl-[5.25rem]">
                                                {f.a.map((p, i) => (
                                                    <p key={i}>{p}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    {items.length === 0 && (
                        <p className="mt-10 border border-dashed border-slate-300 p-8 text-center text-slate-600">
                            No questions match “{query}”. Try another word, or{" "}
                            <Link to="/contact" className="font-bold text-[#00707F] underline underline-offset-4">
                                ask us directly
                            </Link>
                            .
                        </p>
                    )}

                    <Reveal className="mt-14 bg-[#1B4A72] p-8 text-center text-white sm:p-10">
                        <h3 className="font-['Playfair_Display',serif] text-2xl font-bold">Still have a question?</h3>
                        <p className="mt-2 text-white/75">Our client care managers are happy to help.</p>
                        <Link
                            to="/contact"
                            className="dx-shine group mt-6 inline-flex items-center gap-2 bg-[#00707F] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#1B4A72]"
                        >
                            Contact us
                            <ArrowRight size={16} aria-hidden
                                        className="transition-transform group-hover:translate-x-1"/>
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="bg-[#F2F6F9] py-16">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <CertMarquee/>
                </div>
            </section>
        </>
    );
}