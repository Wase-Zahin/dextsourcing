import {Link} from "react-router-dom";
import {ArrowRight, Eye, Handshake, Target} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import Stats from "../Stats";
import CertMarquee from "../components/certmarquee.tsx";
import {Reveal} from "../components/reveal.tsx";
import {bg} from "../Img/images.tsx";

const pillars = [
    {
        icon: Target,
        title: "Our mission",
        text: "To give buyers a reliable, transparent way to source quality garments from Bangladesh, with every order handled by one accountable team.",
    },
    {
        icon: Eye,
        title: "Our vision",
        text: "To be the first name global brands think of when they need a trusted apparel partner who delivers on quality, price and time.",
    },
    {
        icon: Handshake,
        title: "Our values",
        text: "Honesty in every update, respect for the people who make your clothes, and long-term relationships over quick wins.",
    },
];

const steps = [
    {title: "Inquiry", text: "You send a tech pack, sketch or master sample. We reply with a clear quotation."},
    {title: "Development", text: "Our team develops samples and tests fabrics, fit and washes until you approve."},
    {
        title: "Factory selection",
        text: "We pick the compliance-audited factory that fits your product, quantity and timeline."
    },
    {title: "Production", text: "Your merchandiser follows the order daily, from fabric to sewing to finishing."},
    {title: "Quality control", text: "Inline, pre-final and final inspections run before anything is allowed to ship."},
    {title: "Shipment", text: "We pack to your specification and hand over on time, with all export documents ready."},
];

const why = [
    "In-house QC teams on the factory floor during every stage of production, not remote reports",
    "One accountable merchandiser for each order",
    "Separate factories for knit, woven, denim and sweater, so orders never overlap",
    "Only audited, compliant partner factories",
];

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Dext Sourcing"
                photo={31031033}
                subtitle="A multinational buying hub, manufacturer and exporter of woven, denim, knit and sweater garments."
                crumbs={[{label: "About"}]}
            />

            {/* Intro */}
            <section className="bg-white py-20 lg:py-28">
                <div
                    className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <Reveal dir="left">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">Who We Are</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-[#1B4A72] sm:text-4xl">
                            The Leading Apparel Manufacturer and Exporter
                        </h2>
                        <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                            <p>
                                Dext Sourcing is a leading multinational apparel buying hub, sourcing company,
                                manufacturer and committed
                                exporter on woven, denim, knit, sweater etc. We produce best quality garments for all of
                                our internationally
                                reputed buyers/importers and departmental chain stores from US, EU, UK, RU etc. markets.
                                Since our
                                establishment, we have developed long term trade relationships with most of our
                                potential customers &amp;
                                earned trust in their respective markets.
                            </p>
                            <p>
                                Unlike traditional sourcing agents who merely introduce buyers to factories, Dext
                                Sourcing operates as a true
                                end-to-end supply chain partner, managing factory selection, sample development,
                                merchandising, fabric
                                sourcing, production management, quality assurance and control, garment dyeing and
                                washing, embroidery,
                                printing, trimming, and full export documentation under one roof.
                            </p>
                            <p>
                                We specialize in five core garment categories (woven, denim, knit, sweater, and
                                homewear) operating through
                                14+ compliance-certified partner factories with a combined production capacity exceeding
                                1 million pieces per
                                month.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal dir="right">
                        <div className="relative">
                            <div
                                className="absolute -bottom-5 -left-5 hidden h-full w-full border-2 border-[#00707F]/40 sm:block"
                                aria-hidden/>
                            <div
                                role="img"
                                aria-label="Quality control team on the factory floor"
                                className="relative aspect-[4/3] w-full bg-cover bg-center shadow-xl"
                                style={{backgroundImage: bg(31251573, 1200)}}
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Mission / vision / values */}
            <section className="dx-weave-light bg-[#F2F6F9] py-20 lg:py-28">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ul className="grid gap-6 md:grid-cols-3">
                        {pillars.map(({icon: Icon, title, text}, i) => (
                            <Reveal as="li" key={title} delay={i * 120}
                                    className="group bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <span
                    className="flex h-14 w-14 items-center justify-center bg-[#1B4A72] text-white transition-colors group-hover:bg-[#00707F]">
                  <Icon size={26} aria-hidden/>
                </span>
                                <h3 className="mt-6 font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">{title}</h3>
                                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Process */}
            <section className="bg-white py-20 lg:py-28">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">How we work</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72] sm:text-4xl lg:text-5xl">
                            From inquiry to shipment in six steps
                        </h2>
                    </Reveal>
                    <ol className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((s, i) => (
                            <Reveal as="li" key={s.title} delay={(i % 3) * 110}
                                    className="relative border-t-2 border-[#1B4A72]/15 pt-8">
                                <span className="absolute -top-px left-0 h-0.5 w-16 bg-[#00707F]" aria-hidden/>
                                <span
                                    className="font-['Playfair_Display',serif] text-5xl font-bold text-[#00707F]/25">{String(i + 1).padStart(2, "0")}</span>
                                <h3 className="mt-2 font-['Playfair_Display',serif] text-xl font-bold text-[#1B4A72]">{s.title}</h3>
                                <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <Stats/>

            {/* Why choose us */}
            <section className="bg-white py-20 lg:py-28">
                <div
                    className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <Reveal dir="left">
                        <div
                            role="img"
                            aria-label="Sewing line in a partner factory"
                            className="aspect-[4/3] w-full bg-cover bg-center shadow-xl"
                            style={{backgroundImage: bg(31030995, 1200)}}
                        />
                    </Reveal>
                    <Reveal dir="right">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">Why Dext Sourcing</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-[#1B4A72] sm:text-4xl">
                            What sets us apart
                        </h2>
                        <ul className="mt-8 space-y-5">
                            {why.map((w, i) => (
                                <li key={w} className="flex gap-4">
                                    <span
                                        className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#00707F] text-sm font-bold text-white">{i + 1}</span>
                                    <span className="leading-relaxed text-slate-700">{w}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact"
                            className="dx-shine group mt-10 inline-flex items-center gap-2 bg-[#1B4A72] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#00707F]"
                        >
                            Talk to our team
                            <ArrowRight size={16} aria-hidden
                                        className="transition-transform group-hover:translate-x-1"/>
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="bg-[#F2F6F9] py-16">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h3 className="mb-8 text-center font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">Certifications &amp; memberships</h3>
                    <CertMarquee/>
                </div>
            </section>
        </>
    );
}