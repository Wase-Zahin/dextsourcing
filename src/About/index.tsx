import {Link} from "react-router-dom";
import {bg} from "../Img/images.tsx";

export default function About() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div
                className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">Who We Are</p>
                    <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-[#1B4A72] sm:text-4xl lg:text-5xl">
                        The Leading Apparel Manufacturer and Exporter
                    </h2>
                    <p className="mt-6 max-w-xl leading-relaxed text-slate-600">
                        Dext Sourcing is a leading multinational apparel buying hub, sourcing company, manufacturer
                        and committed exporter on woven, denim, knit, sweater etc. We produce best quality garments
                        for all of our internationally reputed buyers/importers and departmental chain stores from
                        US, EU, UK, RU etc. markets. Since our establishment, we have developed long term trade
                        relationships with most of our potential customers &amp; earned trust in their respective
                        markets.
                    </p>
                    <Link
                        to="/about"
                        className="mt-8 inline-block bg-[#1B4A72] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#00707F]"
                    >
                        View more
                    </Link>
                </div>

                <div className="relative">
                    <div className="absolute -bottom-5 -right-5 hidden h-full w-full bg-[#00707F]/20 sm:block"
                         aria-hidden/>
                    <div
                        role="img"
                        aria-label="Garment factory team at work"
                        className="relative aspect-[4/3] w-full bg-cover bg-center"
                        style={{backgroundImage: bg(31031033, 1200)}}
                    />
                </div>
            </div>
        </section>
    );
}