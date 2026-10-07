import {Link, useParams} from "react-router-dom";
import {ArrowRight, Clock, Shirt} from "lucide-react";
import PageHeader from "../components/pageheader.tsx";
import {Reveal} from "../components/reveal.tsx";
import {bg} from "../Img/images.tsx";
import {getProduct, products} from "../components/site.ts";
import NotFoundPage from "../NotFoundPage";

export default function ProductCategoryPage() {
    const {slug} = useParams();
    const product = getProduct(slug);
    if (!product) return <NotFoundPage/>;

    const others = products.filter((p) => p.slug !== product.slug);

    return (
        <>
            <PageHeader
                title={product.title}
                photo={product.photo}
                subtitle={product.tagline}
                crumbs={[{label: "Products", to: "/products"}, {label: product.title}]}
            />

            <section className="bg-white py-20 lg:py-28">
                <div
                    className="mx-auto grid w-full max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                    <Reveal dir="left">
                        <div
                            role="img"
                            aria-label={product.title}
                            className="aspect-[4/3] w-full bg-cover bg-center shadow-xl"
                            style={{backgroundImage: bg(product.photo, 1200)}}
                        />
                    </Reveal>

                    <Reveal dir="right">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">{product.title}</p>
                        <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl font-bold leading-tight text-[#1B4A72] sm:text-4xl">
                            {product.tagline}
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-600">{product.intro}</p>

                        <div className="mt-8 flex gap-4 border-l-4 border-[#00707F] bg-[#F2F6F9] p-5">
                            <Clock size={22} aria-hidden className="mt-0.5 shrink-0 text-[#00707F]"/>
                            <div>
                                <p className="font-bold text-[#1B4A72]">Normal shipment period</p>
                                <p className="mt-1 text-slate-600">{product.leadTime}</p>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="dx-shine group mt-8 inline-flex items-center gap-2 bg-[#00707F] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1B4A72]"
                        >
                            Request a quote
                            <ArrowRight size={16} aria-hidden
                                        className="transition-transform group-hover:translate-x-1"/>
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="dx-weave-light bg-[#F2F6F9] py-20 lg:py-24">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal className="text-center">
                        <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72] sm:text-4xl">What
                            we make in {product.title}</h2>
                    </Reveal>
                    <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {product.items.map((item, i) => (
                            <Reveal
                                as="li"
                                key={item}
                                delay={(i % 4) * 80}
                                className="group flex items-center gap-4 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2F6F9] text-[#00707F] transition-colors group-hover:bg-[#00707F] group-hover:text-white">
                  <Shirt size={22} aria-hidden/>
                </span>
                                <span className="font-semibold text-[#14212B]">{item}</span>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#1B4A72]">Other
                        categories</h2>
                    <ul className="mt-8 grid gap-6 md:grid-cols-3">
                        {others.map((p, i) => (
                            <Reveal as="li" key={p.slug} delay={i * 100} className="group">
                                <Link to={`/products/${p.slug}`} className="relative block overflow-hidden">
                                    <div
                                        role="img"
                                        aria-label={p.title}
                                        className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                                        style={{backgroundImage: bg(p.photo, 800)}}
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#10304D]/85 to-transparent"/>
                                    <span
                                        className="absolute bottom-4 left-5 flex items-center gap-2 font-['Playfair_Display',serif] text-xl font-bold text-white">
                    {p.title}
                                        <ArrowRight size={18} aria-hidden
                                                    className="transition-transform group-hover:translate-x-1.5"/>
                  </span>
                                </Link>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}