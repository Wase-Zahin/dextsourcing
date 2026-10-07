import {Link, useParams} from "react-router-dom";
import {ArrowLeft, ArrowRight, Check} from "lucide-react";
import PageHeader from "../components/PageHeader";
import CertMarquee from "../components/CertMarquee";
import {Reveal} from "../components/Reveal";
import {bg} from "../Img/images.tsx";
import {getService, services} from "../components/site";
import NotFoundPage from "../NotFoundPage";

export default function ServiceDetailPage() {
    const {slug} = useParams();
    const service = getService(slug);
    if (!service) return <NotFoundPage/>;

    const index = services.findIndex((s) => s.slug === service.slug);
    const prev = services[(index - 1 + services.length) % services.length];
    const next = services[(index + 1) % services.length];

    return (
        <>
            <PageHeader
                title={service.title}
                photo={service.photo}
                subtitle={service.subtitle}
                crumbs={[{label: "Services", to: "/#services"}, {label: service.title}]}
            />

            <section className="bg-white py-16 lg:py-24">
                <div
                    className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-16 lg:px-8">
                    {/* Sidebar */}
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <nav aria-label="All services" className="border border-slate-200 bg-[#F2F6F9]">
                            <h2 className="bg-[#1B4A72] px-6 py-4 font-['Playfair_Display',serif] text-lg font-bold text-white">Our
                                services</h2>
                            <ul>
                                {services.map((s) => {
                                    const active = s.slug === service.slug;
                                    return (
                                        <li key={s.slug} className="border-t border-slate-200 first:border-t-0">
                                            <Link
                                                to={`/services/${s.slug}`}
                                                aria-current={active ? "page" : undefined}
                                                className={`flex items-center justify-between px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                                                    active
                                                        ? "border-l-4 border-[#00707F] bg-white text-[#00707F]"
                                                        : "border-l-4 border-transparent text-[#14212B] hover:border-[#00707F]/40 hover:bg-white hover:pl-8 hover:text-[#00707F]"
                                                }`}
                                            >
                                                {s.title}
                                                {active && <ArrowRight size={14} aria-hidden/>}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className="dx-weave relative mt-6 overflow-hidden bg-[#10304D] p-8 text-white">
                            <h3 className="font-['Playfair_Display',serif] text-xl font-bold">Need a quotation?</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/75">Send your tech pack or a master
                                sample and we will reply with a clear price.</p>
                            <Link
                                to="/contact"
                                className="dx-shine group mt-5 inline-flex items-center gap-2 bg-[#00707F] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#1B4A72]"
                            >
                                Contact us
                                <ArrowRight size={16} aria-hidden
                                            className="transition-transform group-hover:translate-x-1"/>
                            </Link>
                        </div>
                    </aside>

                    {/* Content */}
                    <article>
                        <Reveal>
                            <div
                                role="img"
                                aria-label={service.title}
                                className="aspect-[16/9] w-full bg-cover bg-center shadow-xl"
                                style={{backgroundImage: bg(service.photo, 1400)}}
                            />
                            <h2 className="mt-10 font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72] sm:text-4xl">{service.title}</h2>
                            <h3 className="mt-2 text-lg font-semibold text-[#00707F]">{service.subtitle}</h3>
                        </Reveal>

                        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                            {service.paragraphs.map((p, i) => (
                                <Reveal key={i} delay={i * 60}>
                                    <p>{p}</p>
                                </Reveal>
                            ))}
                        </div>

                        {service.lists.map((list) => (
                            <Reveal key={list.title} className="mt-12">
                                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">{list.title}</h3>
                                {list.ordered ? (
                                    <ol className="mt-6 space-y-3">
                                        {list.items.map((item, i) => (
                                            <li key={i}
                                                className="flex gap-4 border border-slate-200 bg-[#F2F6F9] p-4 transition-colors hover:border-[#00707F]/50 hover:bg-white">
                                                <span
                                                    className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#1B4A72] text-sm font-bold text-white">{i + 1}</span>
                                                <span className="leading-relaxed text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                        {list.items.map((item) => (
                                            <li key={item}
                                                className="flex items-start gap-3 border border-slate-200 bg-[#F2F6F9] p-4">
                        <span
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#00707F] text-white">
                          <Check size={14} aria-hidden/>
                        </span>
                                                <span className="leading-relaxed text-slate-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Reveal>
                        ))}

                        {/* Previous / next */}
                        <div className="mt-16 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
                            <Link to={`/services/${prev.slug}`}
                                  className="group flex items-center gap-3 text-[#1B4A72] transition-colors hover:text-[#00707F]">
                                <ArrowLeft size={18} aria-hidden
                                           className="transition-transform group-hover:-translate-x-1"/>
                                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">Previous</span>
                  <span className="font-bold">{prev.title}</span>
                </span>
                            </Link>
                            <Link to={`/services/${next.slug}`}
                                  className="group flex items-center justify-end gap-3 text-right text-[#1B4A72] transition-colors hover:text-[#00707F]">
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">Next</span>
                  <span className="font-bold">{next.title}</span>
                </span>
                                <ArrowRight size={18} aria-hidden
                                            className="transition-transform group-hover:translate-x-1"/>
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            {service.slug === "production" && (
                <section className="bg-[#F2F6F9] py-16">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <CertMarquee/>
                    </div>
                </section>
            )}
        </>
    );
}