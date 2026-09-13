import Reveal from "../Reveal";

// NOTE: Placeholder categories and stock imagery — swap for the client's
// actual product lines and real product photography.
const categories = [
    {
        name: "Knit",
        blurb: "Tees, polos, and fleece in cotton, poly, and blends.",
        img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1470&auto=format&fit=crop"
    },
    {
        name: "Woven",
        blurb: "Shirts, jackets, and outerwear built to spec.",
        img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1470&auto=format&fit=crop"
    },
    {
        name: "Denim",
        blurb: "Selvedge and stretch denim, washed to your standard.",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop"
    },
    {
        name: "Sweater",
        blurb: "Cut-and-sew and fully-fashioned knitwear.",
        img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1470&auto=format&fit=crop"
    },
];

export default function ProductCategories() {
    return (
        <section className="bg-canvas py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <Reveal className="max-w-xl mb-12">
                    <h2 className="f-display font-bold text-3xl md:text-4xl leading-tight mb-4">
                        What we produce
                    </h2>
                    <p className="text-graphite text-base leading-relaxed">
                        Four core categories today, with new ones added as factory partnerships grow.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((cat) => (
                        <div key={cat.name} className="group relative rounded-sm overflow-hidden tag-shadow">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(28,27,25,0.95) 0%, rgba(28,27,25,0.65) 40%, rgba(28,27,25,0.05) 75%, transparent 100%)",
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3
                                    className="f-display font-semibold text-lg text-canvas mb-1"
                                    style={{textShadow: "0 1px 6px rgba(0,0,0,0.4)"}}
                                >
                                    {cat.name}
                                </h3>
                                <p className="text-white text-xs leading-relaxed">{cat.blurb}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}