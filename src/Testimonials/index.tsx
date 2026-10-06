import {useRef} from "react";
import {ChevronLeft, ChevronRight, Quote} from "lucide-react";

const testimonials = [
    {
        name: "Jessica Mcgrill",
        role: "Purchasing Manager",
        quote:
            "Definitely one of the best buying house from Bangladesh. I have been doing business with them for quite some years now, they always keep their promises and are always very flexible to the client’s needs.",
    },
    {
        name: "Tyra Mason",
        role: "Senior Buyer",
        quote:
            "Anyone can give you a quotation and make things without assuring the quality. This organization have proved to me that reasonable pricing can be achieved without compromising on quality. I am very keen on my product quality and these people have met my expectations.",
    },
    {
        name: "Ezekiel Pullings",
        role: "Production Director",
        quote:
            "Best place for your denim products. Their price is very competitive of others and the quality is topnotch. Dext Sourcing has been the supplier for my denims for almost 8 years now. Wish them nothing but success. They definitely have my trust.",
    },
    {
        name: "Tom Tirman",
        role: "Purchasing Manager",
        quote:
            "I work with other buying houses too in Bangladesh, but I must admit Dext Sourcing is my top player. They are growing and I like their pace and methods. Their dedications toward their work is really appraisable. I believe this buying house has the potential to become one of the top names in their market in the near future.",
    },
    {
        name: "Stacy K. Miller",
        role: "Brand Manager",
        quote:
            "They are very responsive. They have always kept me upto date with “actual” production status and never mislead me in anyway, which is hard to come by these days.",
    },
    {
        name: "David Jones",
        role: "Sourcing Director",
        quote:
            "I have been working with Dext Sourcing for the last few years. Never did I have a chance to complain about their services. The order are always on point. I have still not received any delayed delivery from them, hope they can keep it up.",
    },
];

const initials = (name: string) =>
    name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

export default function Testimonials() {
    const track = useRef<HTMLUListElement>(null);

    const scroll = (dir: 1 | -1) => {
        const el = track.current;
        if (!el) return;
        el.scrollBy({left: dir * el.clientWidth * 0.8, behavior: "smooth"});
    };

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#00707F]">Testimonials!</p>
                        <h2 className="mt-3 font-['Playfair_Display',serif] text-3xl font-bold text-[#1B4A72] sm:text-4xl lg:text-5xl">
                            What Our Clients Say!
                        </h2>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => scroll(-1)}
                            aria-label="Previous testimonials"
                            className="border border-[#1B4A72]/30 p-3 text-[#1B4A72] transition-colors hover:bg-[#1B4A72] hover:text-white"
                        >
                            <ChevronLeft size={20}/>
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll(1)}
                            aria-label="Next testimonials"
                            className="border border-[#1B4A72]/30 p-3 text-[#1B4A72] transition-colors hover:bg-[#1B4A72] hover:text-white"
                        >
                            <ChevronRight size={20}/>
                        </button>
                    </div>
                </div>

                <ul
                    ref={track}
                    className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {testimonials.map((t) => (
                        <li
                            key={t.name}
                            className="flex min-w-[88%] snap-start flex-col border-t-4 border-[#00707F] bg-[#F2F6F9] p-8 sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                        >
                            <Quote size={34} className="text-[#00707F]" aria-hidden/>
                            <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">{t.quote}</blockquote>
                            <div className="mt-8 flex items-center gap-4">
                <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4A72] font-['Playfair_Display',serif] text-lg font-bold text-white"
                    aria-hidden
                >
                  {initials(t.name)}
                </span>
                                <span>
                  <span className="block font-bold text-[#1B4A72]">{t.name}</span>
                  <span className="block text-sm text-slate-500">{t.role}</span>
                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}