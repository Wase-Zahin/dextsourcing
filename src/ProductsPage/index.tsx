import {Link} from "react-router-dom";
import {ArrowRight, Clock} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import {Reveal} from "../components/reveal.tsx";
import {bg} from "../Img/images.tsx";
import {products} from "../components/site.ts";

export default function ProductsPage() {
    return (
        <>
            <PageHeader
                title="Our Products"
                photo={28735221}
                subtitle="Woven, knit, sweater and homewear, made in separate specialized factories."
                crumbs={[{label: "Products"}]}
            />

            <section className="bg-white py-20 lg:py-28">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">What we make</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72] sm:text-4xl lg:text-5xl">
                            Four product categories, one accountable partner
                        </h2>
                    </Reveal>

                    <ul className="mt-16 grid gap-8 md:grid-cols-2">
                        {products.map((p, i) => (
                            <Reveal as="li" key={p.slug} delay={(i % 2) * 120} className="group">
                                <Link
                                    to={`/products/${p.slug}`}
                                    className="relative block h-full overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <div
                                            role="img"
                                            aria-label={p.title}
                                            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                                            style={{backgroundImage: bg(p.photo, 1000)}}
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-[#10304D]/85 via-[#10304D]/20 to-transparent"/>
                                        <h3 className="absolute bottom-5 left-6 font-['Playfair_Display',serif] text-3xl font-bold text-white">{p.title}</h3>
                                    </div>
                                    <div className="p-6 sm:p-8">
                                        <p className="font-semibold text-[#00707F]">{p.tagline}</p>
                                        <p className="mt-3 leading-relaxed text-slate-600">{p.intro}</p>
                                        <div
                                            className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
                      <span className="flex items-start gap-2 text-sm text-slate-500">
                        <Clock size={16} aria-hidden className="mt-0.5 shrink-0 text-[#00707F]"/>
                          {p.leadTime.split(".")[0]}.
                      </span>
                                            <span
                                                className="inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1B4A72] transition-colors group-hover:text-[#00707F]">
                        View
                        <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1.5"/>
                      </span>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}